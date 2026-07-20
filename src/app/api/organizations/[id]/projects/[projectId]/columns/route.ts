import { NextRequest } from "next/server";
import { createColumnSchema } from "@/schemas/column.schema";
import * as columnService from "@/services/column.service";
import { successResponse, errorResponse } from "@/utils/api-response";
import { validateBody } from "@/middleware/validate";
import { authenticate, AuthenticatedRequest } from "@/middleware/auth";
import { AppError } from "@/utils/errors";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string; projectId: string }> }) {
  const authError = await authenticate(request);
  if (authError) return authError;

  try {
    const user = (request as AuthenticatedRequest).user;
    const { projectId } = await params;
    const columns = await columnService.getColumns(projectId, user.id);
    return successResponse(columns);
  } catch (error) {
    if (error instanceof AppError) {
      return errorResponse(error.message, error.statusCode, error.code);
    }
    return errorResponse("Sütunlar alınamadı", 500, "INTERNAL_ERROR");
  }
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string; projectId: string }> }) {
  const authError = await authenticate(request);
  if (authError) return authError;

  try {
    const user = (request as AuthenticatedRequest).user;
    const { projectId } = await params;
    const body = await validateBody(request, createColumnSchema);
    if (body instanceof Response) return body;

    const column = await columnService.createColumn(projectId, body, user.id);
    return successResponse(column, 201);
  } catch (error) {
    if (error instanceof AppError) {
      return errorResponse(error.message, error.statusCode, error.code);
    }
    return errorResponse("Sütun oluşturulamadı", 500, "INTERNAL_ERROR");
  }
}
