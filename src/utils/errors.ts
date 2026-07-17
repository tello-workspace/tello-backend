/**
 * Custom hata sınıfları.
 * Service katmanı bu hataları fırlatır, route handler try/catch ile yakalar.
 * Tüm feature'lar (project, card, insight) aynı hata sınıflarını kullanır.
 */

export class AppError extends Error {
  constructor(
    public statusCode: number,
    message: string,
  ) {
    super(message);
    this.name = "AppError";
  }
}

export class NotFoundError extends AppError {
  constructor(resource = "Kaynak") {
    super(404, `${resource} bulunamadı`);
    this.name = "NotFoundError";
  }
}

export class UnauthorizedError extends AppError {
  constructor(message = "Bu işlem için yetkiniz yok") {
    super(401, message);
    this.name = "UnauthorizedError";
  }
}

export class ValidationError extends AppError {
  constructor(message: string) {
    super(400, message);
    this.name = "ValidationError";
  }
}

export class ConflictError extends AppError {
  constructor(message: string) {
    super(409, message);
    this.name = "ConflictError";
  }
}
