import { NextRequest } from "next/server";
import { loginSchema } from "@/schemas/auth.schema";
import * as authService from "@/services/auth.service";
import { successResponse, errorResponse } from "@/utils/api-response";
import { validateBody } from "@/middleware/validate";
import { AppError } from "@/utils/errors";

export async function POST(request: NextRequest) {
  try {
    const body = await validateBody(request, loginSchema);
    const result = await authService.login(body);
    return successResponse(result);
  } catch (error) {
    if (error instanceof AppError) {
      return errorResponse(error.message, error.statusCode);
    }
    return errorResponse("Giriş başarısız", 500);
  }
}
