import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const getdatafromtoken = (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    const decodedtoken = jwt.verify(token, process.env.TOKEN_SECRET!);
    const id =
      (decodedtoken as any)._id ||
      (decodedtoken as any).id ||
      (decodedtoken as any).userId ||
      (decodedtoken as any).sub;
    return String(id);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
