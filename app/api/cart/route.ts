import { NextResponse } from 'next/server'
import { cartTable, db } from '../../../lib/drizzle'
import { eq, and } from 'drizzle-orm'

export async function GET(request: Request, response: Response) {
    try {
        const selectResult = await db.select().from(cartTable)
        return NextResponse.json(selectResult)
    } catch (err) {
        console.log(err)
        return NextResponse.json(err)
    }
}

export async function POST(request: Request, response: Response) {
    const { user_id, product_id, quantity } = await request.json();
    try {
        const existingCartItem = await db
            .select()
            .from(cartTable)
            .where(and(eq(cartTable.user_id, user_id), eq(cartTable.product_id, product_id)))

        if (existingCartItem.length > 0) {
            let result = await db
                .update(cartTable)
                .set({ quantity: existingCartItem[0].quantity + quantity })
                .where(and(eq(cartTable.user_id, user_id), eq(cartTable.product_id, product_id)))
                .execute();
            return NextResponse.json(result);
        } else {
            let result = await db
                .insert(cartTable)
                .values({ user_id, product_id, quantity })
                .execute();
            return NextResponse.json(result);
        }

    } catch (err) {
        console.log(err)
        return NextResponse.json(err)
    }

}

