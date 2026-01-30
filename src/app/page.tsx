import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionCard from "@/components/ui/SectionCard";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Header />

      <main className="flex-1 w-full flex flex-col items-center justify-center p-4 gap-6">
        <SectionCard isTransparent>
          <h2 className="text-xl md:text-2xl text-[#3A3834] text-center mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
            Experience Premier Gastronomy, Drinks, Relaxation, and Shisha Delights
          </h2>
          <div className="flex flex-col gap-4 w-full max-w-sm mx-auto">
            <Link
              href="/food"
              className="w-full h-[72px] bg-[#3a3834] text-[#f4efe8] rounded-lg shadow-md flex items-center justify-center text-[18px] font-medium border-b-4 border-[#f4efe8]/20 hover:border-[#f4efe8]/40 hover:scale-[1.03] transition-all duration-300"
            >
              Food
            </Link>

            <Link
              href="/beverages"
              className="w-full h-[72px] bg-[#3a3834] text-[#f4efe8] rounded-lg shadow-md flex items-center justify-center text-[18px] font-medium border-b-4 border-[#f4efe8]/20 hover:border-[#f4efe8]/40 hover:scale-[1.03] transition-all duration-300"
            >
              Beverages
            </Link>

            <Link
              href="/cocktails"
              className="w-full h-[72px] bg-[#3a3834] text-[#f4efe8] rounded-lg shadow-md flex items-center justify-center text-[18px] font-medium border-b-4 border-[#f4efe8]/20 hover:border-[#f4efe8]/40 hover:scale-[1.03] transition-all duration-300"
            >
              Cocktails
            </Link>
          </div>
        </SectionCard>
      </main>

      <Footer />
    </div>
  );
}
