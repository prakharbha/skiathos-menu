import Footer from "@/components/layout/Footer";
import BackButton from "@/components/ui/BackButton";
import MenuSection from "@/components/ui/MenuSection";
import { client } from "@/sanity/lib/client";
import { SECTION_QUERY } from "@/sanity/lib/queries";

export default async function FoodPage() {
    const foodData = await client.fetch(SECTION_QUERY, { slug: "food" });

    if (!foodData) return null;

    return (
        <div className="min-h-screen flex flex-col items-center">
            <BackButton />
            <MenuSection title={foodData.name} categories={foodData.categories} />
            <Footer />
        </div>
    );
}
