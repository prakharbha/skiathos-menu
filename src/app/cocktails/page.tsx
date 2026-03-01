import Footer from "@/components/layout/Footer";
import BackButton from "@/components/ui/BackButton";
import MenuSection from "@/components/ui/MenuSection";
import { client } from "@/sanity/lib/client";
import { SECTION_QUERY, GLOBAL_SETTINGS_QUERY } from "@/sanity/lib/queries";

export const revalidate = 60;

export default async function CocktailsPage() {
    const [cocktailsData, globalSettings] = await Promise.all([
        client.fetch(SECTION_QUERY, { slug: "cocktails" }),
        client.fetch(GLOBAL_SETTINGS_QUERY)
    ]);

    if (!cocktailsData) return null;

    return (
        <div className="min-h-screen flex flex-col items-center">
            <BackButton />
            <MenuSection
                title={cocktailsData.name}
                categories={cocktailsData.categories}
                menuFooterText={globalSettings?.menuFooterText}
            />
            <Footer />
        </div>
    );
}
