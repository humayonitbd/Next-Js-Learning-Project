import { NextResponse } from "next/server";


export default function GET(req) {
  return NextResponse.json({"message":"I am Learning Programming!!"})
}
