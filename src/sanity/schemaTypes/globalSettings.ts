import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'globalSettings',
    title: 'Global Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'menuFooterText',
            title: 'Menu Footer Text',
            type: 'string',
            description: 'The text displayed at the bottom of the menu sections (e.g., "Menu Crafted by Chef Honda Radu").',
            initialValue: 'Menu Crafted by Chef Honda Radu'
        }),
        defineField({
            name: 'homepageTagline',
            title: 'Homepage Tagline',
            type: 'string',
            description: 'The subtitle text shown on the homepage below the logo.',
        })
    ]
})
