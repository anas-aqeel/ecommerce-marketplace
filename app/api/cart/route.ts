import { NextResponse } from 'next/server'
import { cartTable, db } from '../../../lib/drizzle'
import { eq, and } from 'drizzle-orm'

export async function GET(request: Request, response: Response) {
    console.log('working')
    try {
        const selectResult = await db.select().from(cartTable)
        return NextResponse.json(selectResult)
    } catch (err) {
        console.log(err)
        return NextResponse.json(err)
    }
}

export async function POST(request: Request, response: Response) {
    const { user_id, product_id, quantity } = await request.json()
    try {
        const selectResult = await db
            .insert(cartTable)
            .values({ user_id, product_id, quantity })
        return NextResponse.json(selectResult)
    } catch (err) {
        console.log(err)
        return NextResponse.json(err)
    }
}

