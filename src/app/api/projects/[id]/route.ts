import { NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  // TODO: get project with board
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  // TODO: update project
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  // TODO: delete project
}
