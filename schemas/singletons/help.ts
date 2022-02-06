import { Question } from 'phosphor-react'
import { validateSlug } from '../../utils/validateSlug'

const TITLE = 'Help'

export default {
  name: 'help',
  title: TITLE,
  type: 'document',
  icon: Question,
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
      initialValue: 'help',
      options: {
        source: 'title',
        maxLength: 30
      },
    },
    // Intro
    {
      name: 'intro',
      title: 'Intro',
      type: 'text',
      rows: 4
    },
    // Contact
    {
      name: 'contact',
      title: 'Contact Information',
      description: 'Leave a field empty to hide it.',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
        columns: 2
      },
      fields: [
        {
          name: 'email',
          type: 'string',
          initialValue: 'info@margin.global',
          validation: Rule =>
            Rule.regex(
              /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
              {
                name: 'email', // Error message is "Does not match email-pattern"
                invert: false // Boolean to allow any value that does NOT match pattern
              }
            )
        },
        {
          name: 'sms',
          title: 'SMS',
          type: 'string',
          validation: Rule =>
            Rule.regex(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, {
              name: 'phone', // Error message is "Does not match email-pattern"
              invert: false // Boolean to allow any value that does NOT match pattern
            })
        },
        {
          name: 'chat',
          type: 'boolean',
          initialValue: false,
          options: {
            layout: 'checkbox'
          }
        }
      ]
    },
    {
      name: 'faq',
      title: 'Frequently Asked Questions',
      type: 'array',
      options: {
        sortable: true
      },
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Question', type: 'string' },
            { name: 'body', title: 'Answer', type: 'text', rows: 4 }
          ]
        }
      ]
    },
    // SEO
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo'
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
