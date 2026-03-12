import Footer from "@/components/layout/Footer";
import BackButton from "@/components/ui/BackButton";
import MenuSection from "@/components/ui/MenuSection";
import { client } from "@/sanity/lib/client";
import { SECTION_QUERY } from "@/sanity/lib/queries";

export const revalidate = 60;

export default async function ShishaPage() {
    const shishaData = await client.fetch(SECTION_QUERY, { slug: "shisha" });

    if (!shishaData) return null;

    return (
        <div className="min-h-screen flex flex-col items-center">
            <BackButton />
            <MenuSection
                title={shishaData.name}
                categories={shishaData.categories}
            />
            <Footer />
        </div>
    );
}
