// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Rich text annotations used in the block content editor
import annotationLinkEmail from './annotations/linkEmail'
import annotationLinkExternal from './annotations/linkExternal'
import annotationLinkInternal from './annotations/linkInternal'
import annotationProduct from './annotations/product'

// Document types
import article from './documents/article'
import collection from './documents/collection'
import product from './documents/product'
import productVariant from './documents/productVariant'

// Hull Document types
import page from './documents/page'
import filter from './documents/filter'
import solidColor from './documents/color'

import generalSettings from './documents/settings-general'
import cookieSettings from './documents/settings-cookie'
import promoSettings from './documents/settings-promo'
import headerSettings from './documents/settings-header'
import footerSettings from './documents/settings-footer'
import seoSettings from './documents/settings-seo'
import menu from './documents/menu'
import redirect from './documents/redirect'

// Singleton document types
import home from './singletons/home'
import help from './singletons/help'
import settings from './singletons/settings'

// Block content
import body from './blocks/body'

// Module types
import grid from './sections/grid'
import hero from './sections/hero'
import marquee from './sections/marquee'
import spread from './sections/spread'
import newsletter from './sections/newsletter'
import productHero from './sections/product-hero'
import collectionGrid from './sections/collection-grid'


// Object types
import blockImage from './objects/blockImage'
import blockInlineProduct from './objects/blockInlineProduct'
import blockInlineProductMarginalia from './objects/blockInlineProductMarginalia'
import blockProduct from './objects/blockProduct'
import linkExternal from './objects/linkExternal'
import linkInternal from './objects/linkInternal'
import placeholderString from './objects/placeholderString'
import productOption from './objects/productOption'
import productWithVariant from './objects/productWithVariant'
import proxyString from './objects/proxyString'
import seo from './objects/seo'
import shopifyProduct from './objects/shopifyProduct'
import shopifyProductVariant from './objects/shopifyProductVariant'


// Hull object types
import gridColumn from './objects/grid-column'
import gridSize from './objects/grid-size'


import productGalleryPhotos from './objects/product-gallery-photos'
import productListingPhotos from './objects/product-listing-photos'
import productCartPhotos from './objects/product-cart-photos'
import productOptionValue from './objects/product-option-value'
import productOptionSettings from './objects/product-option-settings'

import navDropdown from './objects/nav-dropdown'
import navPage from './objects/nav-page'
import navLink from './objects/nav-link'
import socialLink from './objects/social-link'
import horizontalRule from './objects/horizontal-rule'

import simplePortableText from './objects/portable-simple'
import complexPortableText from './objects/portable-complex'

import customImage from './objects/customImage'
import freeform from './objects/freeform'
import accordions from './objects/accordions'
import accordion from './objects/accordion'
import productCard from './objects/product-card'

import participant from './objects/participant'

// Build the schemas and export to the Sanity Studio app
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Annotations
    annotationLinkEmail,
    annotationLinkExternal,
    annotationLinkInternal,
    annotationProduct,
    // Document types
    article,
    collection,
    product,
    productVariant,
    page,
    filter,
    solidColor,

    generalSettings,
    cookieSettings,
    promoSettings,
    headerSettings,
    footerSettings,
    seoSettings,
    menu,
    redirect,
    // Singleton document types
    home,
    help,
    settings,
    // Block content
    body,
    // Modules
    grid,
    hero,
    marquee,
    spread,
    newsletter,
    productHero,
    collectionGrid,
    // Objects
    blockImage,
    blockInlineProduct,
    blockInlineProductMarginalia,
    blockProduct,
    linkExternal,
    linkInternal,
    placeholderString,
    productOption,
    productWithVariant,
    proxyString,
    seo,
    shopifyProduct,
    shopifyProductVariant,
    /* ----------------------- */
    /* Hull Objects */
    gridColumn,
    gridSize,

    productGalleryPhotos,
    productListingPhotos,
    productCartPhotos,
    productOptionValue,
    productOptionSettings,

    navDropdown,
    navPage,
    navLink,
    socialLink,
    horizontalRule,

    simplePortableText,
    complexPortableText,

    customImage,
    freeform,
    accordions,
    accordion,
    productCard,

    participant
  ])
})
