import S from '@sanity/desk-tool/structure-builder'
import { standardViews } from './previews/standard'

// prettier-ignore
export const help = S.listItem()
  .title('Help')
  .schemaType('help')
  .child(
    S.editor()
      .title('Help')
      .schemaType('help')
      .documentId('help')
      .views(standardViews)
  )
