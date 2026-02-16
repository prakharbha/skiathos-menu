
import { createClient } from "next-sanity";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

if (!process.env.SANITY_API_TOKEN) {
    console.warn("Warning: SANITY_API_TOKEN not found in .env.local. Using public dataset if possible.");
}

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: "2024-02-05",
    useCdn: false, // Ensure fresh data
    // token: process.env.SANITY_API_TOKEN, // Optional if dataset is public, but good for drafts
    perspective: "published",
});

const QUERY = `
  *[_type == "section" && slug.current == "food"][0]{
    name,
    "categories": categories[]->{
      title,
      "items": items[]->{
        name,
        price
      }
    }
  }
`;

async function checkPrices() {
    console.log("Fetching food menu from Sanity...");
    try {
        const data = await client.fetch(QUERY);

        if (!data) {
            console.error("No data found for section 'food'");
            return;
        }

        console.log("Section:", data.name);

        const targetItems = ["Greek Salad", "GREEN CHICKEN SALAD"];
        let foundCount = 0;

        data.categories.forEach((category: any) => {
            category.items.forEach((item: any) => {
                // Case-insensitive check
                if (targetItems.some(t => t.toLowerCase() === item.name.toLowerCase())) {
                    console.log(`Found item: ${item.name}`);
                    console.log(`Price: ${item.price}`);
                    foundCount++;
                }
            });
        });

        if (foundCount === 0) {
            console.log("Target items not found in the 'food' section.");
        }

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

checkPrices();
