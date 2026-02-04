"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface CollapsibleCategoryProps {
    title: string;
    serviceHours?: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

export default function CollapsibleCategory({
    title,
    serviceHours,
    children,
    defaultOpen = false,
}: CollapsibleCategoryProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="mb-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between py-3 border-b border-[#3A3834] text-left group"
            >
                <span className="text-xl md:text-2xl font-medium text-[#3A3834] uppercase tracking-wide">
                    {title}
                </span>
                <ChevronDown
                    className={`w-6 h-6 text-[#3A3834] transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>

            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="bg-white rounded-lg shadow-md mt-4 p-6">
                    {serviceHours && (
                        <p className="text-sm text-gray-500 text-right mb-4">
                            Service Hours: {serviceHours}
                        </p>
                    )}
                    {children}
                </div>
            </div>
        </div>
    );
}
