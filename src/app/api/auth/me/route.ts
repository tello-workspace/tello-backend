import { NextRequest } from "next/server";
import * as authService from "@/services/auth.service";
import { successResponse, errorResponse } from "@/utils/api-response";
import { authenticate, AuthenticatedRequest } from "@/middleware/auth";
import { AppError } from "@/utils/errors";

export async function GET(request: NextRequest) {
  const authResponse = await authenticate(request);
  if (authResponse) return authResponse;

  const user = (request as AuthenticatedRequest).user;

  try {
    const result = await authService.getMe(user.id);
    return successResponse(result);
  } catch (error) {
    if (error instanceof AppError) {
      return errorResponse(error.message, error.statusCode);
    }
    return errorResponse("Kullanıcı bilgisi alınamadı", 500);
  }
}
