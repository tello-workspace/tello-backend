import { NextRequest } from "next/server";
import { addMemberSchema } from "@/schemas/organization.schema";
import * as organizationService from "@/services/organization.service";
import { successResponse, errorResponse } from "@/utils/api-response";
import { validateBody } from "@/middleware/validate";
import { authenticate, AuthenticatedRequest } from "@/middleware/auth";
import { AppError } from "@/utils/errors";

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const authError = await authenticate(request);
  if (authError) return authError;

  try {
    const user = (request as AuthenticatedRequest).user;
    const { id } = await params;
    const body = await validateBody(request, addMemberSchema);
    if (body instanceof Response) return body;

    const member = await organizationService.addMember(id, body, user.id);
    return successResponse(member, 201);
  } catch (error) {
    if (error instanceof AppError) {
      return errorResponse(error.message, error.statusCode, error.code);
    }
    return errorResponse("Üye eklenemedi", 500, "INTERNAL_ERROR");
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const authError = await authenticate(request);
  if (authError) return authError;

  try {
    const user = (request as AuthenticatedRequest).user;
    const { id } = await params;

    const { searchParams } = new URL(request.url);
    const memberUserId = searchParams.get("userId");

    if (!memberUserId) {
      return errorResponse("userId parametresi gerekli", 400, "VALIDATION_ERROR");
    }

    await organizationService.removeMember(id, memberUserId, user.id);
    return successResponse({ removed: true });
  } catch (error) {
    if (error instanceof AppError) {
      return errorResponse(error.message, error.statusCode, error.code);
    }
    return errorResponse("Üye çıkarılamadı", 500, "INTERNAL_ERROR");
  }
}
