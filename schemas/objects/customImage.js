import { ImageSquare } from 'phosphor-react'
import { PAGE_REFERENCES } from '../../constants'

const crops = [
  { title: 'Original', value: 0 },
  { title: '1 : 1 (square)', value: 1 },
  { title: '5 : 7', value: 0.7142857143 },
  { title: '4 : 6', value: 0.6666666667 },
  { title: '16 : 9', value: 1.7777777778 },
]

export default {
  title: 'Image',
  name: 'customImage',
  type: 'image',
  icon: ImageSquare,
  options: {
    hotspot: true,
  },
  fields: [
    {
      type: 'object',
      name: 'meta',
      options: {
        isHighlighted: true,
      },
      fields: [
        {
          title: 'Alternative text',
          name: 'alt',
          type: 'string',
          description:
            'Important for SEO and accessiblity, optionally used as a caption.',
        },
        {
          title: 'Show Caption',
          description: 'If checked',
          options: {
            layout: 'checkbox',
          },
          type: 'boolean',
          name: 'caption',
          initialValue: false,
        },
        {
          title: 'Link',
          name: 'link',
          type: 'reference',
          to: PAGE_REFERENCES
        },
        {
          title: 'Display Size (aspect ratio)',
          name: 'customRatio',
          type: 'number',
          options: {
            list: crops,
          },
          validation: (Rule) => {
            return Rule.custom((field, context) =>
              'asset' in context.parent && field === undefined
                ? 'Required!'
                : true,
            )
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      asset: 'asset',
      alt: 'asset.alt',
      customAlt: 'alt',
      customRatio: 'customRatio',
    },
    prepare({ alt, customAlt, customRatio, asset }) {
      const crop = crops.find((crop) => crop.value === customRatio)

      return {
        title: customAlt ?? alt ?? '(alt text missing)',
        subtitle: crop.title,
        media: asset,
      }
    },
  },
}
