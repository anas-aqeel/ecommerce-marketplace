// products.js


export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'product_id',
      type: 'string',
      title: 'ID',
      readOnly: true, // Hide the input field for ID
      hidden: true // Hide the ID field from the editor UI
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'likes',
      title: 'Likes',
      type: 'number',
    },
    {
      name: 'seller',
      title: 'Seller',
      type: 'reference',
      to: [{ type: 'user' }],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
    },
  ],
};
