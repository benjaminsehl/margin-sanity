import { PaperPlaneTilt } from 'phosphor-react'

export default {
  title: 'Newsletter Form',
  name: 'newsletter',
  type: 'object',
  icon: PaperPlaneTilt,
  fields: [
    {
      title: 'Call to Action',
      name: 'submit',
      type: 'string',
      initialValue: 'Sign up →'
    },
    {
      title: 'Placeholder Text',
      name: 'palceholder',
      type: 'string',
      initialValue: 'Email'
    },
    {
      title: 'Success Message',
      name: 'successMsg',
      type: 'string'
    },
    {
      title: 'Error Message',
      name: 'errorMsg',
      type: 'string'
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Newsletter Form'
      }
    }
  }
}
