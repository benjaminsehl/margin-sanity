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
    {
      name: 'issue',
      title: 'Issue',
      type: 'string',
    },
    {
      title: 'URL Slug',
      name: 'slug',
      type: 'slug',
      validation: validateSlug,
      options: {
        source: 'issue',
        maxLength: 30,
      },
      description: '(required)',
    },
    {
      name: 'excerpt',
      type: 'text',
      rows: 4
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
