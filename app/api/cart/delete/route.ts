import { NextRequest, NextResponse } from 'next/server'
import { cartTable, db } from '../../../../lib/drizzle'
import { eq, and } from 'drizzle-orm'

export async function POST(request: NextRequest, response: Response) {
    const { product_id, user_id }: any = await request.json()
    try {
        let delReq = await db
            .delete(cartTable)
            .where(
                and(eq(cartTable.product_id, product_id), eq(cartTable.user_id, user_id)),
            ).returning({ product_id: cartTable.product_id, qauntity: cartTable.quantity })

        return NextResponse.json(delReq)

    }
    catch (error) {
        return NextResponse.json({ "Error": error })
    }
}
