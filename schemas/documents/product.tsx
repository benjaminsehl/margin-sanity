import { TagIcon } from '@sanity/icons'
import pluralize from 'pluralize'
import React from 'react'
import ProductHiddenInput from '../../components/inputs/ProductHidden'
import ProductStatusMedia from '../../components/media/ProductStatus'
import { getPriceRange } from '../../utils/getPriceRange'

export default {
  // HACK: Required to hide 'create new' button in desk structure
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: TagIcon,
  groups: [
    { name: 'details', title: 'Details' },
    { name: 'benefits', title: 'Benefits' },
    { name: 'ingredients', title: 'Ingredients' },
    { name: 'seo', title: 'SEO' }
  ],
  fieldsets: [
    { name: 'details', title: 'Details', options: { collapsible: true, collapsed: false } },
    { name: 'benefits', title: 'Benefits', options: { collapsible: true, collapsed: false } },
    { name: 'ingredients', title: 'Ingredients', options: { collapsible: true, collapsed: false } },
    { name: 'seo', title: 'SEO', options: { collapsible: true, collapsed: false } }
  ],
  fields: [
    // Product hidden status
    {
      name: 'hidden',
      type: 'string',
      inputComponent: ProductHiddenInput,
      hidden: ({ parent }) => {
        const isActive = parent?.store?.status === 'active'
        const isDeleted = parent?.store?.isDeleted

        return isActive && !isDeleted
      }
    },
    // Title (proxy)
    {
      title: 'Title',
      name: 'titleProxy',
      type: 'proxyString',
      options: { field: 'store.title' },
      group: 'details',
      fieldset: 'details'
    },
    // Slug (proxy)
    {
      title: 'Slug',
      name: 'slugProxy',
      type: 'proxyString',
      group: 'details',
      fieldset: 'details',
      options: { field: 'store.slug.current' }
    },
    // Images
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      group: 'details',
      fieldset: 'details',
      options: { hotspot: true }
    },
    // Accordion
    {
      group: 'details',
      fieldset: 'details',
      name: 'tabs',
      title: 'Tabs',
      type: 'array',
      of: [
        {
          name: 'tab',
          title: 'Tab',
          type: 'object',
          fields: [
            // Title
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: Rule => Rule.required()
            },
            // Body
            {
              name: 'body',
              title: 'Body',
              type: 'array',
              of: [
                {
                  lists: [],
                  marks: { decorators: [] },
                  styles: [],
                  type: 'block'
                }
              ]
            }
          ]
        }
      ],
      validation: Rule => Rule.max(3)
    },
    // Benefits
    {
      name: 'benefitsImage',
      title: 'Image',
      type: 'image',
      group: 'benefits',
      fieldset: 'benefits',
      options: { hotspot: true }
    },
    {
      name: 'benefitsHeading',
      title: 'heading',
      type: 'string',
      group: 'benefits',
      fieldset: 'benefits'
    },
    {
      name: 'benefitList',
      title: 'Benefits',
      type: 'array',
      group: 'benefits',
      fieldset: 'benefits',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'benefit', type: 'string' },
            { name: 'description', type: 'text', rows: 4 }
          ]
        }
      ]
    },

    // Shopify product
    {
      name: 'store',
      title: 'Shopify',
      type: 'shopifyProduct',
      description: 'Product data from Shopify (read-only)',
      hidden: true
    },
    {
      name: 'ingredientsImage',
      title: 'Image',
      description: 'Only shown on mobile',
      type: 'image',
      group: 'ingredients',
      fieldset: 'ingredients',
      options: { hotspot: true }
    },
    {
      name: 'ingredientsHeading',
      title: 'Heading',
      type: 'text',
      rows: 5,
      group: 'ingredients',
      fieldset: 'ingredients'
    },
    {
      name: 'activeIngredients',
      group: 'ingredients',
      fieldset: 'ingredients',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string' },
            { name: 'description', type: 'text' }
          ]
        }
      ]
    },
    {
      name: 'allIngredients',
      group: 'ingredients',

      fieldset: 'ingredients',
      type: 'text'
    },
    // SEO
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo'
    }
  ],
  orderings: [
    {
      title: 'Title (A-Z)',
      name: 'titleAsc',
      by: [{ field: 'store.title', direction: 'asc' }]
    },
    {
      title: 'Title (Z-A)',
      name: 'titleAsc',
      by: [{ field: 'store.title', direction: 'desc' }]
    },
    {
      title: 'Price (Highest first)',
      name: 'titleAsc',
      by: [{ field: 'store.priceRange.minVariantPrice', direction: 'desc' }]
    },
    {
      title: 'Title (Lowest first)',
      name: 'titleAsc',
      by: [{ field: 'store.priceRange.minVariantPrice', direction: 'asc' }]
    }
  ],
  preview: {
    select: {
      isDeleted: 'store.isDeleted',
      optionCount: 'store.options.length',
      previewImageUrl: 'store.previewImageUrl',
      priceRange: 'store.priceRange',
      status: 'store.status',
      title: 'store.title',
      variantCount: 'store.variants.length'
    },
    prepare(selection) {
      const { isDeleted, optionCount, previewImageUrl, priceRange, status, title, variantCount } =
        selection

      let description = [
        variantCount ? pluralize('variant', variantCount, true) : 'No variants',
        optionCount ? pluralize('option', optionCount, true) : 'No options'
      ]

      let subtitle = getPriceRange(priceRange)
      if (status !== 'active') {
        subtitle = '(Unavailable in Shopify)'
      }
      if (isDeleted) {
        subtitle = '(Deleted from Shopify)'
      }

      return {
        media: (
          <ProductStatusMedia
            isActive={status === 'active'}
            isDeleted={isDeleted}
            type="product"
            url={previewImageUrl}
          />
        ),
        description: description.join(' / '),
        subtitle,
        title
      }
    }
  }
}
