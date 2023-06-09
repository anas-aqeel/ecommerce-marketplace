import { client } from "./client"

export const fetchAllProducts = async () => {
    try {
      const query = '*[_type == "product"]'
      const products = await client.fetch(query)
      return products
    } catch (error) {
      console.error('Error fetching products:', error)
      return []
    }
  }