import S from '@sanity/desk-tool/structure-builder'

import { File } from 'phosphor-react'

import { standardViews } from './previews/standard'

export const pagesMenu = S.listItem()
  .title('Pages')
  .id('pages')
  .schemaType('page')
  .child(
    S.documentTypeList('page')
      .title('Pages')
      .child((documentId) =>
        S.document()
          .documentId(documentId)
          .schemaType('page')
          .views(standardViews),
      ),
  )
  .icon(File)
