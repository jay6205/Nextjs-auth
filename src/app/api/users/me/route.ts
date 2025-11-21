import { getdatafromtoken } from "@/helpers/getdatafromtoken";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbconfig";
import User from "@/models/userModel";

await connect();

export async function GET(request: NextRequest) {
  try {
    const userID = getdatafromtoken(request);
    // console.log(userID);
    
    const user =await User.findById(userID)
      .select(
        "-password -isAdmin -forgotPasswordToken -forgotPasswordTokenExpiry -verifyToken -verifyTokenExpiry"
      )
      .lean();
    // console.log(user);

    return NextResponse.json({
      message: "User Found",
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
