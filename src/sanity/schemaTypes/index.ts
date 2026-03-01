import { type SchemaTypeDefinition } from 'sanity'

import category from './category'
import menuItem from './menuItem'
import section from './section'
import globalSettings from './globalSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [section, category, menuItem, globalSettings],
}
