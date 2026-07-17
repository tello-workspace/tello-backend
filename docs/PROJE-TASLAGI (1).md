# Proje Taslağı — Proaktif Görev Yönetim Aracı

> Çalışma adı: **[PROJE ADI]** (ilk toplantıda karar verin)
> Tek cümlelik tanım: Trello sadeliğinde bir kanban aracı; ama pano pasif durmaz — bayatlayan kartları, dengesiz iş yükünü ve darboğazları **kendisi tespit edip söyler**.

---

## 1. Teknoloji Stack'i

| Katman | Teknoloji | Not |
|---|---|---|
| Frontend | React 18 + Vite + TypeScript | |
| State | Redux Toolkit + RTK Query | Board state + API cache + optimistic update |
| Drag & Drop | @dnd-kit/core + @dnd-kit/sortable | react-beautiful-dnd artık bakımda değil |
| Stil | Tailwind CSS | |
| Backend | Node.js + Express + TypeScript | Ekip isterse JS de olur, TS önerilir |
| ORM | Prisma | Migration + type-safe sorgular |
| Veritabanı | PostgreSQL 16 | |
| Auth | JWT + bcrypt | |
| Validation | Zod | Hem backend input hem frontend form |
| Zamanlanmış işler | node-cron | Stale kart taraması (gece çalışır) |
| Deploy | Vercel (FE) + Railway/Render (BE+DB) | Hafta 6 |

---

## 2. Repo ve Klasör Yapısı

İki ayrı repo (veya tek monorepo — toplantıda karar verin, iki repo daha basit):

```
backend/
├── prisma/
│   ├── schema.prisma        # ekteki dosya
│   └── seed.ts              # örnek data
├── src/
│   ├── index.ts             # Express app + route mount
│   ├── routes/              # auth.routes.ts, project.routes.ts, card.routes.ts ...
│   ├── controllers/         # istek/yanıt katmanı
│   ├── services/            # iş mantığı (insight.service.ts burada!)
│   ├── middleware/          # auth.middleware.ts, validate.ts, errorHandler.ts
│   ├── jobs/                # staleScanner.ts (cron)
│   └── utils/               # jwt.ts, activity.ts (log helper)
├── .env.example
└── package.json

frontend/
├── src/
│   ├── app/                 # store.ts, api.ts (RTK Query base)
│   ├── features/            # Redux feature-folder pattern
│   │   ├── auth/            # authSlice, Login, Register
│   │   ├── projects/        # proje listesi, üye yönetimi
│   │   ├── board/           # Board, Column, Card, dnd mantığı
│   │   ├── insights/        # akıllı panel (stale, iş yükü, darboğaz)
│   │   └── notifications/
│   ├── components/          # ortak UI (Button, Modal, Avatar...)
│   ├── pages/               # route bileşenleri
│   └── lib/                 # yardımcılar
└── package.json
```

---

## 3. Veritabanı Tasarımı (özet)

Tam şema ekteki `schema.prisma` dosyasında. İlişki haritası:

```
User ──1:N── Project (owner)
User ──N:N── Project (ProjectMember, role: ADMIN/MEMBER)
Project ──1:N── Column ──1:N── Card
Card ──N:N── Label        (CardLabel)
Card ──N:N── Card         (CardDependency: "blocked by")
Card ──1:N── Comment
Project ──1:N── Activity  (her olay loglanır → haftalık özet buradan)
User ──1:N── Notification
```

**Tartışmanız gereken 4 tasarım kararı** (toplantı gündemi):

1. **Board katmanı yok.** Önceki taslakta Project → Board → Column vardı; MVP'de "1 proje = 1 pano" diye sadeleştirdim. Çoklu pano istenirse sonradan Board tablosu eklenir.
2. **`position` alanı `Float`.** Kart taşınınca `(öncekiPos + sonrakiPos) / 2` yazılır — tek satır update, reindex yok. (Alternatif: Int + toplu reindex. Fractional indexing'i araştırın, güzel öğrenme konusu.)
3. **`lastActivityAt` = stale motorunun kalbi.** Karta dokunan her işlem (taşıma, yorum, düzenleme) bu alanı günceller. Cron gece tarar: 7+ gün dokunulmamış kart → stale.
4. **`Column.wipLimit`** opsiyonel alan → darboğaz uyarısının veri kaynağı.

---

## 4. API Endpoint Listesi

**Auth**
```
POST   /api/auth/register
POST   /api/auth/login          → { token, user }
GET    /api/auth/me
```

**Projects & Üyeler**
```
GET    /api/projects                          üyesi olduklarım
POST   /api/projects                          oluştur (owner otomatik ADMIN)
GET    /api/projects/:id                      board yükleme: columns + cards nested
PATCH  /api/projects/:id                      (ADMIN)
DELETE /api/projects/:id                      (owner)
POST   /api/projects/:id/members              email ile davet (ADMIN)
DELETE /api/projects/:id/members/:userId      (ADMIN)
```

**Columns & Cards**
```
POST   /api/projects/:id/columns
PATCH  /api/columns/:id                       isim / position / wipLimit
DELETE /api/columns/:id
POST   /api/columns/:id/cards
GET    /api/cards/:id                         detay: comments + labels + dependencies
PATCH  /api/cards/:id                         güncelleme VE taşıma (columnId + position)
DELETE /api/cards/:id
```

**Comments, Labels, Dependencies**
```
GET    /api/cards/:id/comments
POST   /api/cards/:id/comments
POST   /api/projects/:id/labels               PATCH/DELETE /api/labels/:id
POST   /api/cards/:id/labels/:labelId         etiket tak / DELETE ile çıkar
POST   /api/cards/:id/dependencies            body: { blockerId } → DÖNGÜ KONTROLÜ burada
DELETE /api/cards/:id/dependencies/:blockerId
```

**Akıllı uçlar (farkınızı yaratan kısım)**
```
GET    /api/projects/:id/insights             stale kartlar + iş yükü dağılımı + WIP ihlalleri + deadline riskleri
GET    /api/projects/:id/summary              haftalık özet (Activity aggregate)
GET    /api/projects/:id/activities           aktivite akışı
GET    /api/notifications                     PATCH /api/notifications/:id/read
```

---

## 5. Akıllı Özelliklerin Çalışma Mantığı

**Stale tespiti** — `jobs/staleScanner.ts`, her gece 03:00 (node-cron): `lastActivityAt < now − 7 gün` olan ve Done'da olmayan kartları bul → atanan kişiye `STALE_CARD` bildirimi. Frontend'de kart yaşına göre görsel: 7+ gün soluk, 14+ gün kırmızı kenar.

**İş yükü dengesi** — insights endpoint'inde: Done dışındaki kartları `assigneeId`'ye göre GROUP BY, öncelik ağırlıklı say (URGENT=3, HIGH=2, diğer=1). Ortalamanın 1.5 katı üstündeki kişi "aşırı yüklü" işaretlenir.

**Darboğaz** — sütundaki aktif kart sayısı > `wipLimit` ise sütun başlığı uyarı rengine döner.

**Deadline risk skoru** — `dueDate ≤ 3 gün` VE (kart 5+ gündür hareketsiz VEYA hâlâ bloklanmış) → riskli listesine girer.

**Bağımlılık + döngü tespiti** — dependency eklerken BFS/DFS ile kontrol: `blocked` kartından `blocker`'a zaten bir yol varsa 400 dön ("döngü oluşur"). Blocker kartı Done'a taşınınca bekleyen kartların sahiplerine `BLOCKER_RESOLVED` bildirimi.

**Haftalık özet** — Activity tablosundan tarih aralığı aggregate: biten kart sayısı, açılan kart, en aktif üye, bekleyen stale'ler.

---

## 6. Kurulum Komutları

**PostgreSQL (Docker en kolayı):**
```bash
docker run --name pm-db -e POSTGRES_PASSWORD=devpass -e POSTGRES_DB=pmapp -p 5432:5432 -d postgres:16
```

**Backend:**
```bash
mkdir backend && cd backend && npm init -y
npm i express cors dotenv bcrypt jsonwebtoken zod @prisma/client
npm i -D typescript ts-node-dev prisma @types/express @types/cors @types/bcrypt @types/jsonwebtoken @types/node
npx tsc --init
npx prisma init
# prisma/schema.prisma'yı ekteki dosyayla değiştirin, sonra:
npx prisma migrate dev --name init
```

`.env.example`:
```
DATABASE_URL="postgresql://postgres:devpass@localhost:5432/pmapp"
JWT_SECRET="degistirin"
PORT=4000
```

**Frontend:**
```bash
npm create vite@latest frontend -- --template react-ts
cd frontend
npm i @reduxjs/toolkit react-redux react-router-dom @dnd-kit/core @dnd-kit/sortable
npm i tailwindcss @tailwindcss/vite    # Tailwind v4 kurulumu için dokümana bakın
```

---

## 7. Sprint 1 Görevleri (Jira'ya kopyalayın)

| Görev | Sorumlu |
|---|---|
| GitHub repo'ları + branch protection + README | hep birlikte |
| Şema toplantısı: bu taslağı tartış, 4 kararı onayla/değiştir | hep birlikte |
| Backend boilerplate + Prisma migrate + seed script | Kişi C |
| Auth endpoint'leri + JWT middleware | Kişi B |
| Frontend boilerplate + router + Redux store + RTK Query base | Kişi A |
| Login / Register sayfaları (API'ye bağlı) | Kişi A veya B |
| Figma wireframe ×3: login, board, kart detay modalı | Mert |

**Kod standartları:** `main` korumalı · branch adı `feature/PROJ-12-kisa-aciklama` · commit mesajında Jira kodu · en az 1 review'suz merge yok.

---

## 8. Sprint Haritası (hatırlatma)

| Sprint | Hedef |
|---|---|
| 1 | İskelet + auth |
| 2–3 | Board + kart CRUD + temel UI |
| 4 | Drag & drop + position |
| 5 | Akıllı özellikler + bildirimler |
| 6 | Polish, seed data ile demo senaryosu, deploy |
