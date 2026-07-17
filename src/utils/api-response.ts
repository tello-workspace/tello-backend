import { NextResponse } from "next/server";

type ApiResponse<T = unknown> = {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
};

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "http://localhost:3000",
  "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export function successResponse<T>(data: T, status = 200) {
  return NextResponse.json({ success: true, data } satisfies ApiResponse<T>, { status, headers: CORS_HEADERS });
}

export function errorResponse(error: string, status = 400) {
  return NextResponse.json({ success: false, error } satisfies ApiResponse, { status, headers: CORS_HEADERS });
}
