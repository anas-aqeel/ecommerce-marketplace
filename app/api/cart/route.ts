import { NextResponse } from "next/server"

export async function GET(request: Request, response: Response){
    console.log("working")
    return NextResponse.json({"working":"working"})
}