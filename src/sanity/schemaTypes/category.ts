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
            name: 'items',
            title: 'Items',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'menuItem' }] }],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'serviceHours',
        },
    },
})
