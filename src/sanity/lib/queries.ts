import { defineQuery } from 'next-sanity'

export const SECTION_QUERY = defineQuery(`
  *[_type == "section" && slug.current == $slug][0]{
    name,
    "categories": categories[]->{
      title,
      serviceHours,
      note,
      "items": items[]->{
        name,
        description,
        price,
        allergens,
        showDivider
      },
      subCategories[]{
        title,
        showItemDivider,
        "items": items[]->{
          name,
          description,
          price,
          allergens,
          showDivider
        }
      }
    }
  }
`)

export const ALL_SECTIONS_QUERY = defineQuery(`
  *[_type == "section"] | order(_createdAt asc) {
    name,
    "slug": slug.current
  }
`)

export const GLOBAL_SETTINGS_QUERY = defineQuery(`
  *[_type == "globalSettings"][0]{
    menuFooterText,
    homepageTagline
  }
`)
