import { client } from './client'

export const fetchProductById = async (productIds: string[]) => {
  try {
    const query = `*[_type == 'product' && _id match '${productIds}']`
    console.log(query);
    const product = await client.fetch(query)
    return product
  } catch (error) {
    console.error('Error fetching product:', error)
    return null
  }
}
