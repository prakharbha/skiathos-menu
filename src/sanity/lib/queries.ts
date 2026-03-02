import { defineQuery } from 'next-sanity'

export const SECTION_QUERY = defineQuery(`
  *[_type == "section" && slug.current == $slug][0]{
    name,
    "categories": categories[]->{
      title,
      serviceHours,
      note,
      showItemDivider,
      "items": items[]->{
        name,
        description,
        price,
        allergens
      },
      subCategories[]{
        title,
        showItemDivider,
        "items": items[]->{
          name,
          description,
          price,
          allergens
        }
      }
    }
  }
`)

export const GLOBAL_SETTINGS_QUERY = defineQuery(`
  *[_type == "globalSettings"][0]{
    menuFooterText
  }
`)
