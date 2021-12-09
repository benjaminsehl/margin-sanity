import S from '@sanity/desk-tool/structure-builder'
import { Article } from 'phosphor-react'
// prettier-ignore
export const articles = S.listItem()
  .title('Articles')
  .icon(Article)
  .schemaType('article')
  .child(
    S.documentTypeList('article')
  )
