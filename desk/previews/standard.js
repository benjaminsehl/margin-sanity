import S from '@sanity/desk-tool/structure-builder'

import EyeIcon from 'part:@sanity/base/eye-icon'
import EditIcon from 'part:@sanity/base/edit-icon'

import SeoPreview from './seo/seo-preview'

const remoteURL = 'https://margin.global'
const localURL = 'https://margin.global'
const previewURL =
  window.location.hostname === 'localhost' ? localURL : remoteURL

export const standardViews = [
  S.view.form().icon(EditIcon),
  S.view
    .component(SeoPreview)
    .options({ previewURL })
    .icon(EyeIcon)
    .title('SEO Preview')
]
