
export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'profilePic',
        title: 'Profile Picture',
        type: 'image',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
        name: 'favoriteList',
        title: 'Favorite List',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'product' }] }],
      },
      {
        name: 'cart',
        title: 'Cart',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'product' }] }],
      },
      {
        name: 'products',
        title: 'Products',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'product' }] }],
      },
    ],
  };
  