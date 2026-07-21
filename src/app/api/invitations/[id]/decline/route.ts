import { NextRequest } from "next/server";
import * as invitationService from "@/services/invitation.service";
import { successResponse, errorResponse } from "@/utils/api-response";
import { authenticate, AuthenticatedRequest } from "@/middleware/auth";
import { AppError } from "@/utils/errors";

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const authError = await authenticate(request);
  if (authError) return authError;

  try {
    const user = (request as AuthenticatedRequest).user;
    const { id } = await params;
    const invitation = await invitationService.declineInvitation(id, user.id);
    return successResponse(invitation);
  } catch (error) {
    if (error instanceof AppError) {
      return errorResponse(error.message, error.statusCode, error.code);
    }
    return errorResponse("Davet reddedilemedi", 500, "INTERNAL_ERROR");
  }
}
