import Footer from "@/components/layout/Footer";
import BackButton from "@/components/ui/BackButton";
import MenuSection from "@/components/ui/MenuSection";
import { client } from "@/sanity/lib/client";
import { SECTION_QUERY, GLOBAL_SETTINGS_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

export const revalidate = 60;

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function SectionPage({ params }: PageProps) {
    const { slug } = await params;

    const [sectionData, globalSettings] = await Promise.all([
        client.fetch(SECTION_QUERY, { slug }),
        client.fetch(GLOBAL_SETTINGS_QUERY),
    ]);

    if (!sectionData) return notFound();

    // Only show the menu footer text on the food section
    const menuFooterText = slug.toLowerCase() === "food" ? globalSettings?.menuFooterText : undefined;

    return (
        <div className="min-h-screen flex flex-col items-center">
            <BackButton />
            <MenuSection
                title={sectionData.name}
                categories={sectionData.categories}
                menuFooterText={menuFooterText}
            />
            <Footer />
        </div>
    );
}
