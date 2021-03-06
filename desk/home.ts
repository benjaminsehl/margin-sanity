import S from '@sanity/desk-tool/structure-builder'
import { standardViews } from './previews/standard'

// prettier-ignore
export const home = S.listItem()
  .title('Home')
  .schemaType('home')
  .child(
    S.editor()
      .title('Home')
      .schemaType('home')
      .documentId('home')
      .views(standardViews)
  )
