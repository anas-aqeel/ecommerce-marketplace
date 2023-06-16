import { NextRequest, NextResponse } from 'next/server'
import { cartTable, db } from '../../../../lib/drizzle'
import { eq } from 'drizzle-orm'

export async function POST(request: NextRequest, response: Response) {
    const { user_id }: any = await request.json()
    try {
        let delReq = await db
            .delete(cartTable)
            .where(eq(cartTable.user_id, user_id))
            .returning({ product_id: cartTable.product_id, quantity: cartTable.quantity })

        return NextResponse.json(delReq)

    } catch (error) {
        console.log(error)
        return NextResponse.json({ "Error": error })
    }
}
