import { createClient } from '@sanity/client'
import dotenv from 'dotenv'

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

async function cleanup() {
    console.log('Starting cleanup...')

    // Delete all sections
    const sections = await client.fetch(`*[_type == "section"]`)
    console.log(`Deleting ${sections.length} sections...`)
    for (const doc of sections) {
        await client.delete(doc._id)
    }

    // Delete all categories
    const categories = await client.fetch(`*[_type == "category"]`)
    console.log(`Deleting ${categories.length} categories...`)
    for (const doc of categories) {
        await client.delete(doc._id)
    }

    // Delete all menu items
    const items = await client.fetch(`*[_type == "menuItem"]`)
    console.log(`Deleting ${items.length} menu items...`)
    for (const doc of items) {
        await client.delete(doc._id)
    }

    console.log('Cleanup complete!')
}

cleanup().catch((err) => {
    console.error('Cleanup failed:', err)
    process.exit(1)
})
