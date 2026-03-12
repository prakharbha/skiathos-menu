import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionCard from "@/components/ui/SectionCard";
import { client } from "@/sanity/lib/client";
import { ALL_SECTIONS_QUERY, GLOBAL_SETTINGS_QUERY } from "@/sanity/lib/queries";

export const revalidate = 60;

export default async function Home() {
  const [sections, globalSettings] = await Promise.all([
    client.fetch(ALL_SECTIONS_QUERY),
    client.fetch(GLOBAL_SETTINGS_QUERY),
  ]);

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Header />

      <main className="flex-1 w-full flex flex-col items-center justify-center p-4 gap-6">
        <SectionCard isTransparent>
          {globalSettings?.homepageTagline && (
            <h2 className="text-xl md:text-2xl text-[#3A3834] text-center mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
              {globalSettings.homepageTagline}
            </h2>
          )}
          <div className="flex flex-col gap-4 w-full max-w-sm mx-auto">
            {sections?.map((section: { name: string; slug: string }) => (
              <Link
                key={section.slug}
                href={`/${section.slug}`}
                className="w-full h-[72px] bg-[#3a3834] text-[#f4efe8] rounded-lg shadow-md flex items-center justify-center text-[18px] font-medium border-b-4 border-[#f4efe8]/20 hover:border-[#f4efe8]/40 hover:scale-[1.03] transition-all duration-300"
              >
                {section.name}
              </Link>
            ))}
          </div>
        </SectionCard>
      </main>

      <Footer />
    </div>
  );
}
