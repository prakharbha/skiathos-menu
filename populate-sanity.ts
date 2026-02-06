import { createClient } from '@sanity/client'
import { menuData } from './src/data/menu'
import dotenv from 'dotenv'
import { createHash, randomUUID } from 'crypto'

dotenv.config({ path: '.env.local' })

if (!process.env.SANITY_API_TOKEN) {
    console.error('Missing SANITY_API_TOKEN in .env.local')
    process.exit(1)
}

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    token: process.env.SANITY_API_TOKEN,
    apiVersion: '2024-02-05',
    useCdn: false,
})

const serviceHoursMap: Record<string, string> = {
    food: '13:00 - 22:30',
    cocktails: '12:00 - 00:00',
    beverages: '10:00 - 23:00',
}

function generateId(prefix: string, source: string): string {
    const hash = createHash('md5').update(source).digest('hex')
    return `${prefix}-${hash}`
}

async function migrate() {
    console.log('Starting migration...')

    for (const section of menuData) {
        console.log(`Processing section: ${section.title}`)

        // Create Section
        const sectionDoc = {
            _type: 'section',
            _id: `section-${section.id}`,
            name: section.title,
            slug: { _type: 'slug', current: section.id },
            categories: [], // Will populate with references
        } as any

        const categoryRefs = []

        for (const category of section.categories) {
            console.log(`  Processing category: ${category.title}`)

            // Create Menu Items for this category
            const itemRefs = []
            for (const item of category.items) {
                // Create unique ID using hash
                const itemId = generateId('item', `${section.id}-${category.title}-${item.name}`)

                const itemDoc = {
                    _type: 'menuItem',
                    _id: itemId,
                    name: item.name,
                    description: item.description,
                    price: item.price,
                }

                await client.createOrReplace(itemDoc)
                // Add _key for array items in Sanity
                itemRefs.push({ _type: 'reference', _ref: itemId, _key: randomUUID() })
            }

            // Create Category
            const catId = generateId('cat', `${section.id}-${category.title}`)
            const categoryDoc = {
                _type: 'category',
                _id: catId,
                title: category.title,
                serviceHours: serviceHoursMap[section.id],
                items: itemRefs,
            }

            await client.createOrReplace(categoryDoc)
            // Add _key for array items in Sanity
            categoryRefs.push({ _type: 'reference', _ref: catId, _key: randomUUID() })
        }

        // Update Section with category references
        sectionDoc.categories = categoryRefs
        await client.createOrReplace(sectionDoc)
        console.log(`Saved section: ${section.title}`)
    }

    console.log('Migration complete!')
}

migrate().catch((err) => {
    console.error('Migration failed:', err)
    process.exit(1)
})
