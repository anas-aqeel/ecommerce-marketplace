import { NextResponse } from "next/server";
import { cartTable, db } from "../../../../lib/drizzle";
import { eq } from "drizzle-orm";

export async function POST(request: Request, response: Response) {

    const { user_id } = await request.json();
    try {
        const selectResult = await db.select().from(cartTable).where(eq(cartTable.user_id, user_id));
        return NextResponse.json(selectResult)
    } catch (err) {
        console.log(err)
        return NextResponse.json(err)
    }
}

