import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'menuItem',
    title: 'Menu Items',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'string',
        }),
        defineField({
            name: 'allergens',
            title: 'Allergens',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'showDivider',
            title: 'Show Divider Below Item',
            type: 'boolean',
            description: 'When enabled, a border line will be shown below this item to highlight it.',
            initialValue: false,
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'price',
        },
    },
})
