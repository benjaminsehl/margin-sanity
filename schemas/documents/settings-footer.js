export default {
  title: 'Footer Settings',
  name: 'footerSettings',
  type: 'document',
  // __experimental_actions: ['update', 'publish'], // disable for initial publish
  fieldsets: [
    {
      title: 'Newsletter',
      name: 'newsletter'
    },
    {
      title: 'Copyright',
      name: 'copyright'
    }
  ],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      fieldset: 'newsletter',
      initialValue: 'Margin Call'
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string',
      fieldset: 'newsletter',
      initialValue: 'The Weekly Collateral you didn’t think you’d need'
    },
    {
      title: 'Call to Action',
      name: 'submit',
      type: 'string',
      fieldset: 'newsletter',
      initialValue: 'Sign up →'
    },
    {
      title: 'Placeholder Text',
      name: 'placeholder',
      type: 'string',
      fieldset: 'newsletter',
      initialValue: 'Email'
    },
    {
      title: 'Success Message',
      name: 'successMsg',
      fieldset: 'newsletter',
      type: 'string',
      initialValue: 'Thank you! You’re all signed up'
    },
    {
      title: 'Error Message',
      name: 'errorMsg',
      fieldset: 'newsletter',
      type: 'string',
      initialValue: 'Something went wrong…'
    },
    {
      title: 'Company Name',
      name: 'company',
      type: 'string',
      initialValue: 'Margin Supply, Inc.',
      fieldset: 'copyright'
    },
    {
      title: 'Established',
      name: 'established',
      type: 'string',
      initialValue: 'Established 05.16.2021',
      fieldset: 'copyright'
    },
    {
      title: 'Origin',
      name: 'origin',
      type: 'string',
      initialValue: 'Made in Canada',
      fieldset: 'copyright'
    },
    {
      title: 'Menu',
      name: 'menu',
      type: 'reference',
      to: [{ type: 'menu' }]
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer Settings'
      }
    }
  }
}
