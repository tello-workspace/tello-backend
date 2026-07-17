import { NextResponse } from "next/server";

type ApiResponse<T = unknown> = {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
};

export function successResponse<T>(data: T, status = 200) {
  return NextResponse.json({ success: true, data } satisfies ApiResponse<T>, { status });
}

export function errorResponse(error: string, status = 400) {
  return NextResponse.json({ success: false, error } satisfies ApiResponse, { status });
}
