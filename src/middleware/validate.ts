import { NextRequest } from "next/server";
import { ZodSchema, ZodError } from "zod";
import { errorResponse } from "@/utils/api-response";

/**
 * Zod şeması ile request body'sini doğrular.
 * Kullanım: bir route handler içinde:
 *   const data = await validateBody(request, mySchema);
 */
export async function validateBody<T>(request: NextRequest, schema: ZodSchema<T>): Promise<T> {
  try {
    const body = await request.json();
    return schema.parse(body);
  } catch (error) {
    if (error instanceof ZodError) {
      const messages = error.errors.map((e) => `${e.path.join(".")}: ${e.message}`).join(", ");
      throw { status: 400, message: messages };
    }
    throw { status: 400, message: "Geçersiz JSON body" };
  }
}

/**
 * URL parametrelerini doğrular.
 */
export function validateParams<T>(params: Record<string, string | string[] | undefined>, schema: ZodSchema<T>): T {
  try {
    return schema.parse(params);
  } catch (error) {
    if (error instanceof ZodError) {
      const messages = error.errors.map((e) => `${e.path.join(".")}: ${e.message}`).join(", ");
      throw { status: 400, message: messages };
    }
    throw { status: 400, message: "Geçersiz parametre" };
  }
}

/**
 * Request body'sinden JSON okur (Next.js body.json() alternatifi).
 */
export async function parseBody<T>(request: NextRequest): Promise<T> {
  try {
    return await request.json();
  } catch {
    throw { status: 400, message: "Geçersiz JSON body" };
  }
}
