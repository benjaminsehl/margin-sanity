import { Image } from 'phosphor-react'

export default {
  title: 'Spread',
  name: 'spread',
  type: 'object',
  icon: Image,
  fields: [
    {
      title: 'Images',
      type: 'array',
      name: 'images',
      of: [{type: 'customImage'}]
    }
  ],
  preview: {
    select: {
      photo: 'images.0.customImage'
    },
    prepare({ photo }) {
      return {
        title: 'Spread',
        media: photo
      }
    }
  }
}
