import { Article } from 'phosphor-react'
import { validateSlug } from '../../utils/validateSlug'

export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  icon: Article,
  fields: [
    // Title
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title displayed in browser tab / search engine results',
      validation: (Rule) => Rule.required(),
    },
    // Slug
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 30,
      },
      validation: validateSlug,
    },
    {
      title: 'Sections',
      name: 'sections',
      type: 'array',
      of: [
        { type: 'freeform' },
        { type: 'grid' },
        { type: 'spread' },
        { type: 'hero' },
        { type: 'marquee' },
      ],
    },
    // SEO
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
  ],
  preview: {
    select: {
      active: 'active',
      thumbnail: 'thumbnail',
      title: 'title',
    },
    prepare(selection) {
      const { thumbnail, title } = selection

      return {
        media: thumbnail,
        title,
      }
    },
  },
}
