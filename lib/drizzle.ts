import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import {
    pgTable,
    serial,
    integer,
    varchar,
} from 'drizzle-orm/pg-core';

export const cartTable = pgTable(
    'cart',
    {
        id: serial('id').primaryKey(),
        user_id: varchar("user_id", {
            length: 255,
        }).notNull(),
        product_id: varchar("product_id", {
            length: 255,
        }).notNull(),
        quantity: integer("quantity").notNull(),
    },

);

export const db = drizzle(sql);
