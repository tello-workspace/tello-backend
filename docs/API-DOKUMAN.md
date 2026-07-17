# Tello API Dokümanı — Frontend İçin

> **Base URL:** `http://localhost:4000/api`  
> **Tüm response'lar:** `{ success: boolean, data?: ..., error?: string }`

---

## 📌 İçindekiler

| # | Endpoint | Açıklama |
|---|----------|----------|
| 1 | [POST /api/auth/register](#1-register) | Yeni kullanıcı kaydı |
| 2 | [POST /api/auth/login](#2-login) | Giriş yap |
| 3 | [GET /api/auth/me](#3-ben) | Profilimi getir (token gerekli) |

---

## 1. Register

**Yeni hesap oluşturur.**

```
POST /api/auth/register
Content-Type: application/json
```

### Request Body
```json
{
  "name": "Alice Yılmaz",
  "email": "alice@example.com",
  "password": "123456"
}
```

### Success Response — `201 Created`
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIs...",
    "user": {
      "id": "cmrounlk00000jfvohi0es0zh",
      "name": "Alice Yılmaz",
      "email": "alice@example.com"
    }
  }
}
```

### Error — `409 Conflict`
```json
{
  "success": false,
  "error": "Bu email adresi zaten kayıtlı"
}
```

### Error — `400 Bad Request` (validation)
```json
{
  "success": false,
  "error": "Geçerli bir email adresi girin"
}
```

### Kurallar
| Alan | Zorunlu | Kural |
|------|---------|-------|
| `name` | ✅ | 1-100 karakter |
| `email` | ✅ | Geçerli email formatı |
| `password` | ✅ | En az 6 karakter |

---

## 2. Login

**Kayıtlı kullanıcı girişi.**

```
POST /api/auth/login
Content-Type: application/json
```

### Request Body
```json
{
  "email": "alice@example.com",
  "password": "123456"
}
```

### Success Response — `200 OK`
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIs...",
    "user": {
      "id": "cmrounlk00000jfvohi0es0zh",
      "name": "Alice Yılmaz",
      "email": "alice@example.com"
    }
  }
}
```

### Error — `401 Unauthorized`
```json
{
  "success": false,
  "error": "Email veya şifre hatalı"
}
```

> ⚠️ **Güvenlik notu:** Yanlış email vs yanlış şifre aynı hatayı döndürür — hangisinin yanlış olduğu söylenmez.

---

## 3. Ben

**Token sahibi kullanıcının bilgilerini getirir.**

```
GET /api/auth/me
Authorization: Bearer <token>
```

### Success Response — `200 OK`
```json
{
  "success": true,
  "data": {
    "id": "cmrounlk00000jfvohi0es0zh",
    "name": "Alice Yılmaz",
    "email": "alice@example.com",
    "createdAt": "2026-07-17T11:23:30.908Z"
  }
}
```

### Error — `401 Unauthorized`
```json
{
  "success": false,
  "error": "Token gerekli"
}
```

---

## 🧩 Frontend Kullanım Kılavuzu

### Login/Register sonrası yapılacaklar

1. **Token'ı localStorage'a kaydet**
```typescript
const data = await response.json()
localStorage.setItem('token', data.data.token)
```

2. **Token'ı tüm isteklerde Authorization header'ına koy**
```typescript
const token = localStorage.getItem('token')
fetch('/api/projects', {
  headers: { 'Authorization': `Bearer ${token}` }
})
```

3. **401 alınca token'ı temizle ve login sayfasına yönlendir**
```typescript
if (response.status === 401) {
  localStorage.removeItem('token')
  router.push('/login')
}
```

### Token bilgisi
- **JWT** formatında
- **Süresi:** 7 gün
- **İçeriği:** `{ userId, email }`

---

## 🔜 Yakında Eklenecek Endpoint'ler

| Metot | Path | Açıklama |
|-------|------|----------|
| GET | `/api/projects` | Projelerimi listele |
| POST | `/api/projects` | Yeni proje oluştur |
| GET | `/api/projects/:id` | Board detayı (columns + cards) |

---

## 📝 Notlar

- Tüm protected endpoint'ler (`/me` gibi) **Bearer token** ister
- Token yoksa `401` döner
- Validation hatası varsa `400` döner
- Aynı email ile tekrar kayıt `409` döner

---

*Hazırlanma: 2026-07-17*
