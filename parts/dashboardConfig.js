export default {
  widgets: [
    {
      name: 'document-list',
      options: {
        title: 'Recently edited',
        order: '_updatedAt desc',
        limit: 10,
        types: ['page', 'product', 'collection']
      },
      layout: { width: 'medium' }
    },
    {
      name: 'project-info'
    },
    {
      name: 'shopify-connect',
      layout: {
        width: 'small',
      },
    },
  ]
}
