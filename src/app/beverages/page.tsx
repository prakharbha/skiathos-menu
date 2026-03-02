import Footer from "@/components/layout/Footer";
import BackButton from "@/components/ui/BackButton";
import MenuSection from "@/components/ui/MenuSection";
import { client } from "@/sanity/lib/client";
import { SECTION_QUERY } from "@/sanity/lib/queries";

export const revalidate = 60;

export default async function BeveragesPage() {
    const beveragesData = await client.fetch(SECTION_QUERY, { slug: "beverages" });

    if (!beveragesData) return null;

    return (
        <div className="min-h-screen flex flex-col items-center">
            <BackButton />
            <MenuSection
                title={beveragesData.name}
                categories={beveragesData.categories}
            />
            <Footer />
        </div>
    );
}
