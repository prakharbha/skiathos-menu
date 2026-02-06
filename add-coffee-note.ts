import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    token: process.env.SANITY_API_TOKEN!,
    useCdn: false,
    apiVersion: '2024-01-01',
})

async function addCoffeeNote() {
    try {
        // Find the Coffee category
        const categories = await client.fetch(`*[_type == "category" && title match "Coffee*"]`)

        if (categories.length === 0) {
            console.log('❌ Coffee category not found')
            return
        }

        const coffeeCategory = categories[0]
        console.log(`✅ Found category: ${coffeeCategory.title}`)

        // Add the note
        const note = `Feel free to choose from a variety of vegan milk and decaffeinated coffee`

        await client
            .patch(coffeeCategory._id)
            .set({ note })
            .commit()

        console.log('✅ Successfully added vegan milk note to Coffee category')
        console.log(`Note: "${note}"`)
    } catch (error) {
        console.error('❌ Error:', error)
    }
}

addCoffeeNote()
