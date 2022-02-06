/**
 * Desk structure overrides
 *
 * This file configure how documents are structured in the Studio's desk tool.
 * It works because
    {
      "name": "part:@sanity/desk-tool/structure",
      "path": "./deskStructure.js"
    },
  * is added to the `parts` array in `/sanity.json`.
  *
  * Sanity Studio automatically lists document types out of the box.
  * With this custom desk structure we achieve things like showing the `home`
  * and `settings` document types as singletons, and grouping product details
  * and variants for easy editorial access.
  *
  * You can customize this even further as your schemas progress.
  * To learn more about structure builder, visit our docs:
  * https://www.sanity.io/docs/overview-structure-builder
 */

import S from '@sanity/desk-tool/structure-builder'
import { articles } from './desk/articles'
// import { collections } from './desk/collections'
import { home } from './desk/home'
import { help } from './desk/help'
import { products } from './desk/products'

import { settingsMenu } from './desk/settingsMenu'
import { pagesMenu } from './desk/pagesMenu'
import { menusMenu } from './desk/menus'

const hiddenDocTypes = listItem =>
  ![
    'article',
    'collection',
    'home',
    'help',
    'media.tag',
    'page',
    'product',
    'productVariant',
    'settings',
  
    'page',
    'product',
    'productVariant',
    'collection',
    'filter',
    'solidColor',

    'generalSettings',
    'cookieSettings',
    'promoSettings',
    'headerSettings',
    'footerSettings',
    'seoSettings',

    'menu',
    'siteSettings',
    'redirect'
  ].includes(listItem.getId())


export default () => {
  // prettier-ignore
  return (
    S.list()
      .title('Desk')
      .items([
        home,
        products,
        pagesMenu,
        articles,
        help,
        // S.divider(),
        // collections,
        S.divider(),
        settingsMenu,
        S.divider(),
        menusMenu,
        S.divider(),
        // Automatically add new document types to the root pane
        ...S.documentTypeListItems().filter(hiddenDocTypes)
      ])
  )
}
