import { client } from "./client"

export const fetchProductById = async (productId: string) => {
  try {
    const query = `*[_type == "product" && _id == "${productId}"]`
    const product = await client.fetch(query)
    return product
  } catch (error) {
    console.error('Error fetching product:', error)
    return null
  }
}
