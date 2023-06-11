import { NextResponse } from 'next/server'
import { cartTable, db } from '../../../../lib/drizzle'
import { eq, and } from 'drizzle-orm'

export async function POST(request: Request, response: Response) {

    const { product_id, user_id }: any = await request.json()
    console.log(user_id, product_id, "POST request")
    try {
        await db
            .delete(cartTable)
            .where(
                and(eq(cartTable.product_id, product_id), eq(cartTable.user_id, user_id)),
            )

            NextResponse.json("Resolved")

    }
    catch (error) {
        console.log("error")
        return NextResponse.json(error)
    }
}
