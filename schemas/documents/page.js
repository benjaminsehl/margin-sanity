import { File } from 'phosphor-react'
import { validateSlug } from '../../utils/validateSlug'

export default {
  title: 'Page',
  name: 'page',
  type: 'document',
  icon: File,
  groups: [{ name: 'seo', title: 'SEO' }],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      title: 'URL Slug',
      name: 'slug',
      type: 'slug',
      validation: validateSlug,
      options: {
        source: 'title',
        maxLength: 30
      },
      description: '(required)'
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
        { type: 'marquee' }
      ],
      hidden: ({ parent }) => parent.slug.current === 'dispatches'
    },
    {
      title: 'SEO',
      name: 'seo',
      type: 'seo',
      group: 'seo'
    }
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug'
    },
    prepare({ title = 'Untitled', slug = {} }) {
      const path = `/${slug.current}`
      return {
        title,
        subtitle: slug.current ? path : '(missing slug)'
      }
    }
  }
}
