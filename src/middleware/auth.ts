import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/utils/jwt";
import { prisma } from "@/lib/prisma";

export type AuthenticatedRequest = NextRequest & {
  user: { id: string; name: string; email: string };
};

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

    (request as AuthenticatedRequest).user = user;
  } catch {
    return NextResponse.json({ success: false, error: "Geçersiz token" }, { status: 401 });
  }
}
