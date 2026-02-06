import Footer from "@/components/layout/Footer";
import BackButton from "@/components/ui/BackButton";
import MenuSection from "@/components/ui/MenuSection";
import { client } from "@/sanity/lib/client";
import { SECTION_QUERY } from "@/sanity/lib/queries";

export default async function BeveragesPage() {
    const drinksData = await client.fetch(SECTION_QUERY, { slug: "beverages" });

    if (!drinksData) return null;

    return (
        <div className="min-h-screen flex flex-col items-center">
            <BackButton />
            <MenuSection title={drinksData.name} categories={drinksData.categories} />
            <Footer />
        </div>
    );
}
