import S from '@sanity/desk-tool/structure-builder'
import { Article } from 'phosphor-react'
import { standardViews } from './previews/standard'

// prettier-ignore
export const articles = S.listItem()
  .title('Articles')
  .icon(Article)
  .schemaType('article')
  .child(
    S.documentTypeList('article')
    .title('Articles')
    .child((documentId) =>
      S.document()
        .documentId(documentId)
        .schemaType('article')
        .views(standardViews)
    ),
  )
