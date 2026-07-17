import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/utils/jwt";
import { prisma } from "@/lib/prisma";

export type AuthenticatedRequest = NextRequest & {
  user: {
    id: string;
    name: string;
    email: string;
  };
};

/**
 * JWT token doğrulama middleware'i.
 * Authorization: Bearer <token> header'ından token'ı okur,
 * çözümler ve request'e user bilgisini ekler.
 */
export async function authenticate(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json({ success: false, error: "Token gerekli" }, { status: 401 });
    }

    const token = authHeader.slice(7);
    const payload = verifyToken(token);

    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
      select: { id: true, name: true, email: true },
    });

    if (!user) {
      return NextResponse.json({ success: false, error: "Kullanıcı bulunamadı" }, { status: 401 });
    }

    // Request'e user bilgisini ekle
    (request as AuthenticatedRequest).user = user;
  } catch {
    return NextResponse.json({ success: false, error: "Geçersiz token" }, { status: 401 });
  }
}

/**
 * Kullanıcının projede ADMIN rolü olup olmadığını kontrol eder.
 */
export async function requireAdmin(projectId: string, userId: string) {
  const member = await prisma.projectMember.findUnique({
    where: { projectId_userId: { projectId, userId } },
  });

  if (!member || member.role !== "ADMIN") {
    return NextResponse.json({ success: false, error: "Admin yetkisi gerekli" }, { status: 403 });
  }

  return null;
}
