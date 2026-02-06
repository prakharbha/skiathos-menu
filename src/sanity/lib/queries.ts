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
        allergens
      }
    }
  }
`)
