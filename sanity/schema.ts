import { type SchemaTypeDefinition } from 'sanity'
import user from './schemas/user'
import product from './schemas/product'
import category from './schemas/category'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [user, product, category],
}
