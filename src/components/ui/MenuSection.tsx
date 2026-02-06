"use client";

import { useState } from "react";
import CollapsibleCategory from "@/components/ui/CollapsibleCategory";
import MenuItem from "@/components/ui/MenuItem";

import AllergyNotice from "@/components/ui/AllergyNotice";

interface MenuItemData {
    name: string;
    description?: string;
    price?: string;
}

interface CategoryData {
    title: string;
    serviceHours?: string;
    note?: string;
    items: MenuItemData[];
}

interface MenuSectionProps {
    title: string;
    categories: CategoryData[];
    defaultServiceHours?: string; // Fallback if not in category, though we migrated it to category
}

export default function MenuSection({ title, categories }: MenuSectionProps) {
    const [openCategoryIndex, setOpenCategoryIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenCategoryIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <main className="flex-1 w-full max-w-3xl px-4 py-8 mt-12">
            <h1 className="text-3xl md:text-4xl font-medium text-[#3A3834] text-center mb-8">
                {title}
            </h1>

            {categories.map((category, index) => (
                <CollapsibleCategory
                    key={index}
                    title={category.title}
                    isOpen={openCategoryIndex === index}
                    onToggle={() => handleToggle(index)}
                    serviceHours={category.serviceHours}
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
                        {category.note && (
                            <p className="text-sm text-[#3A3834] mt-6 italic pt-4 border-t border-gray-200">
                                {category.note}
                            </p>
                        )}
                    </div>
                </CollapsibleCategory>
            ))}

            <AllergyNotice />
        </main>
    );
}
