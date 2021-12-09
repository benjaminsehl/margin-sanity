import React from 'react'
import { File } from 'phosphor-react'
import SlugInput from 'sanity-plugin-better-slug'

export default {
  title: 'Page',
  name: 'page',
  type: 'document',
  icon: File,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      title: 'URL Slug',
      name: 'slug',
      type: 'slug',
      inputComponent: SlugInput,
      options: {
        source: 'title',
        maxLength: 30,
        basePath: 'margin.global/',
      },
      description: '(required)',
    },
    {
      title: 'Sections',
      name: 'modules',
      type: 'array',
      of: [
        { type: 'grid' },
        { type: 'spread' },
        { type: 'hero' },
        { type: 'marquee' },
      ],
    },
    {
      title: 'SEO',
      name: 'seo',
      type: 'seo',
    },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
    },
    prepare({ title = 'Untitled', slug = {} }) {
      const path = `/${slug.current}`
      return {
        title,
        subtitle: slug.current ? path : '(missing slug)',
      }
    },
  },
}
