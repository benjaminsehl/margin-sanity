import { House } from 'phosphor-react'

const TITLE = 'Home'

export default {
  name: 'home',
  title: TITLE,
  type: 'document',
  groups: [{ name: 'seo', title: 'SEO' }],
  icon: House,
  fields: [
    {
      name: 'heros',
      type: 'array',
      of: [
        {
          name: 'hero',
          type: 'object',
          options: {
            editModal: 'fullscreen'
          },
          fields: [
            {
              name: 'images',
              type: 'array',
              of: [
                {
                  type: 'image',
                  options: {
                    hotspot: true
                  },
                  fields: [
                    {
                      name: 'hiddenScreens',
                      title: 'Hidden from:',
                      type: 'array',
                      of: [{ type: 'string' }],
                      options: {
                        isHighlighted: true,
                        list: [
                          { title: 'XS', value: 'xs-only:hidden' },
                          { title: 'S', value: 'sm-only:hidden' },
                          { title: 'M', value: 'md-only:hidden' },
                          { title: 'L', value: 'lg-only:hidden' },
                          { title: 'XL', value: 'xl-only:hidden' }
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              name: 'caption',
              type: 'text',
              rows: 2
            },
            {
              name: 'product',
              type: 'productWithVariant'
            }
          ]
        }
      ]
    },
    {
      name: 'displayOptions',
      type: 'object',
      options: {
        columns: 2
      },
      fields: [
        {
          name: 'lightNav',
          type: 'boolean',
          initialValue: true
        },
        {
          name: 'hideFooter',
          type: 'boolean',
          initialValue: true
        }
      ]
    },
    // SEO
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo'
    }
  ],
  preview: {
    prepare() {
      return {
        // media: icon,
        subtitle: 'Index',
        title: TITLE
      }
    }
  }
}
