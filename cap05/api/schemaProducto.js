// schemaProducto.js
export const schemaProducto = {
    type: 'object',
    required: ['id', 'title', 'slug', 'price', 'description', 'category', 'images'],
    properties: {
      id: { type: 'number' },
      title: { type: 'string' },
      slug: { type: 'string' },
      price: { type: 'number' },
      description: { type: 'string' },
      category: {
        type: 'object',
        required: ['id', 'name', 'image', 'slug'],
        properties: {
          id: { type: 'number' },
          name: { type: 'string' },
          image: { type: 'string' },
          slug: { type: 'string' }
        }
      },
      images: {
        type: 'array',
        items: { type: 'string'}
      }
    }
  };
  