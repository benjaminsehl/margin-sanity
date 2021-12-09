import { Article } from 'phosphor-react'
import { validateSlug } from '../../utils/validateSlug'
import SlugInput from 'sanity-plugin-better-slug'

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
      inputComponent: SlugInput,
      options: {
        source: 'title',
        maxLength: 30,
        basePath: 'margin.global/articles/',
      },
      validation: validateSlug,
    },
    // Body
    {
      name: 'body',
      title: 'Body',
      type: 'body',
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
