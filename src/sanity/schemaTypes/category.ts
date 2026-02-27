import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'category',
    title: 'Categories',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'serviceHours',
            title: 'Service Hours',
            type: 'string',
            description: 'e.g., "13:00 - 22:30"',
        }),
        defineField({
            name: 'note',
            title: 'Note',
            type: 'text',
            description: 'Optional note to display at the end of this category (e.g., vegan milk options)',
        }),
        defineField({
            name: 'items',
            title: 'Items',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'menuItem' }] }],
        }),
        defineField({
            name: 'subCategories',
            title: 'Subcategories',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', title: 'Subcategory Title', type: 'string' },
                        {
                            name: 'items',
                            title: 'Items',
                            type: 'array',
                            of: [{ type: 'reference', to: [{ type: 'menuItem' }] }],
                        },
                    ],
                },
            ],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'serviceHours',
        },
    },
})
