import { NextRequest } from "next/server";
import { ZodSchema, ZodError } from "zod";

export async function validateBody<T>(request: NextRequest, schema: ZodSchema<T>): Promise<T> {
  const body = await request.json();
  return schema.parse(body);
}
