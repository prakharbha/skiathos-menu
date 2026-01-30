import Footer from "@/components/layout/Footer";
import SectionCard from "@/components/ui/SectionCard";
import CategoryHeader from "@/components/ui/CategoryHeader";
import MenuItem from "@/components/ui/MenuItem";
import BackButton from "@/components/ui/BackButton";
import { menuData } from "@/data/menu";

export default function FoodPage() {
    const foodData = menuData.find((section) => section.id === "food");

    if (!foodData) return null;

    return (
        <div className="min-h-screen flex flex-col items-center">
            <BackButton />

            <main className="flex-1 w-full max-w-3xl px-4 py-8 mt-12">
                <SectionCard className="mb-8">
                    {foodData.categories.map((category, index) => (
                        <div key={index} className="mb-8 last:mb-0">
                            <CategoryHeader title={category.title} />
                            <div className="space-y-4">
                                {category.items.map((item, itemIndex) => (
                                    <MenuItem
                                        key={itemIndex}
                                        name={item.name}
                                        description={item.description}
                                        price={item.price}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </SectionCard>
            </main>

            <Footer />
        </div>
    );
}
