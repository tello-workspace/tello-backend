import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/utils/jwt";
import { prisma } from "@/lib/prisma";
import { errorResponse } from "@/utils/api-response";

export type AuthenticatedRequest = NextRequest & {
  user: { id: string; name: string; email: string };
};

export async function authenticate(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return errorResponse("Token gerekli", 401, "UNAUTHORIZED");
    }

    const token = authHeader.slice(7);
    const payload = verifyToken(token);

    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
      select: { id: true, name: true, email: true },
    });

    if (!user) {
      return errorResponse("Kullanıcı bulunamadı", 401, "UNAUTHORIZED");
    }

    (request as AuthenticatedRequest).user = user;
  } catch {
    return errorResponse("Token süresi dolmuş veya geçersiz", 401, "TOKEN_EXPIRED");
  }
}
