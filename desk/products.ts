import S from '@sanity/desk-tool/structure-builder'
import { Tag, Info, Barcode } from 'phosphor-react'

// prettier-ignore
export const products = S.listItem()
  .title('Products')
  .schemaType('product')
  .icon(Tag)
  .child(
    S.documentTypeList('product')
      // .defaultLayout('detail')
      .child(async id =>
        S.list()
          .title('Product')
          .items([
            // Details
            S.listItem()
              .title('Details')
              .icon(Info)
              .child(
                S.document()
                  .schemaType('product')
                  .documentId(id)
              ),
            // Product variants
            S.listItem()
              .title('Variants')
              .icon(Barcode)
              .schemaType('productVariant')
              .child(
                S.documentList()
                  .title('Variants')
                  .schemaType('productVariant')
                  .filter(
                    `
                      _type == "productVariant"
                      && store.productId == $productId
                    `
                  )
                  .params({
                    productId: Number(id.replace('shopifyProduct-', '')),
                  })
              ),
          ])
      )
  )
