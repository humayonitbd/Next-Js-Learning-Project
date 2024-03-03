import { NextResponse } from "next/server";


export async function GET(req) {
  return NextResponse.json({
    "id":"01",
    "name":"Md Humayon Forid",
    "Title":"Web Designer and Developer!",
    "message":"I am Learning Programming!!"
})
}

