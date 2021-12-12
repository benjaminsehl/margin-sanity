import { WarningCircle } from 'phosphor-react'

export default {
  title: 'Header Settings',
  name: 'headerSettings',
  type: 'document',
  // __experimental_actions: ['update', 'publish'], // disable for initial publish
  fields: [
    {
      title: 'Desktop Menu',
      name: 'menuDesktop',
      type: 'reference',
      to: [{ type: 'menu' }]
    },
    {
      title: 'Mobile Menu',
      name: 'menuMobile',
      type: 'reference',
      to: [{ type: 'menu' }]
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Header Settings'
      }
    }
  }
}
