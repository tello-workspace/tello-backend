import { NextRequest } from "next/server";
import * as notificationService from "@/services/notification.service";
import { successResponse, errorResponse } from "@/utils/api-response";
import { authenticate, AuthenticatedRequest } from "@/middleware/auth";
import { AppError } from "@/utils/errors";

export async function PATCH(request: NextRequest) {
  const authError = await authenticate(request);
  if (authError) return authError;

  try {
    const user = (request as AuthenticatedRequest).user;
    await notificationService.markAllAsRead(user.id);
    return successResponse({ success: true });
  } catch (error) {
    if (error instanceof AppError) {
      return errorResponse(error.message, error.statusCode, error.code);
    }
    return errorResponse("Bildirimler okunamadı", 500, "INTERNAL_ERROR");
  }
}
