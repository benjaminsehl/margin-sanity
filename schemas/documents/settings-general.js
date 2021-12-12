export default {
  title: 'General Settings',
  name: 'generalSettings',
  type: 'document',
  // __experimental_actions: ['update', 'publish'], // disable for initial publish
  fields: [
    {
      title: 'Site Title',
      name: 'siteTitle',
      type: 'string',
      description: 'The name of your site, usually your company/brand name'
    },
    {
      title: 'Live Site URL',
      description: 'The root domain or subdomain of your website',
      name: 'siteURL',
      type: 'url'
    },
    {
      title: 'Google Tag Manager (GTM)',
      description: 'To enable GTM enter your Container ID',
      name: 'gtmID',
      type: 'string'
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'General Settings'
      }
    }
  }
}
