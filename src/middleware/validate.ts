import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { ZodSchema, ZodError } from "zod";
import { validationError } from "@/utils/api-response";

export async function validateBody<T>(request: NextRequest, schema: ZodSchema<T>): Promise<T | NextResponse> {
  try {
    const body = await request.json();
    return schema.parse(body);
  } catch (error) {
    if (error instanceof ZodError) {
      return validationError(error);
    }
    throw error;
  }
}
