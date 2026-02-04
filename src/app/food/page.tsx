import Footer from "@/components/layout/Footer";
import CollapsibleCategory from "@/components/ui/CollapsibleCategory";
import MenuItem from "@/components/ui/MenuItem";
import BackButton from "@/components/ui/BackButton";
import AllergyNotice from "@/components/ui/AllergyNotice";
import { menuData } from "@/data/menu";

export default function FoodPage() {
    const foodData = menuData.find((section) => section.id === "food");

    if (!foodData) return null;

    return (
        <div className="min-h-screen flex flex-col items-center">
            <BackButton />

            <main className="flex-1 w-full max-w-3xl px-4 py-8 mt-12">
                <h1 className="text-3xl md:text-4xl font-medium text-[#3A3834] text-center mb-8">
                    Food Menu
                </h1>
                {foodData.categories.map((category, index) => (
                    <CollapsibleCategory
                        key={index}
                        title={category.title}
                        defaultOpen={index === 0}
                        serviceHours="13:00 - 22:30"
                    >
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
                    </CollapsibleCategory>
                ))}

                <AllergyNotice />
            </main>

            <Footer />
        </div>
    );
}
