/**
 * Custom hata sınıfları.
 * Service katmanı bu hataları fırlatır, route handler try/catch ile yakalar.
 * Her hatanın bir `code` property'si vardır — frontend switch/case yapabilir.
 */

export class AppError extends Error {
  public code: string;

  constructor(
    public statusCode: number,
    message: string,
    code?: string,
  ) {
    super(message);
    this.name = "AppError";
    this.code = code ?? "INTERNAL_ERROR";
  }
}

export class NotFoundError extends AppError {
  constructor(resource = "Kaynak") {
    super(404, `${resource} bulunamadı`, "NOT_FOUND");
    this.name = "NotFoundError";
  }
}

export class UnauthorizedError extends AppError {
  constructor(message = "Bu işlem için yetkiniz yok") {
    super(401, message, "UNAUTHORIZED");
    this.name = "UnauthorizedError";
  }
}

export class ValidationError extends AppError {
  constructor(message: string) {
    super(400, message, "VALIDATION_ERROR");
    this.name = "ValidationError";
  }
}

export class ConflictError extends AppError {
  constructor(message: string) {
    super(409, message, "CONFLICT");
    this.name = "ConflictError";
  }
}

export class ForbiddenError extends AppError {
  constructor(message = "Bu işlem için yetkiniz yok") {
    super(403, message, "FORBIDDEN");
    this.name = "ForbiddenError";
  }
}
