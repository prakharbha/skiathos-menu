import { cn } from "@/lib/utils";

interface SectionCardProps {
    children: React.ReactNode;
    className?: string;
    isTransparent?: boolean;
}

export default function SectionCard({ children, className, isTransparent }: SectionCardProps) {
    return (
        <div
            className={cn(
                "w-full max-w-2xl mx-auto rounded-xl p-6 md:p-8",
                !isTransparent && "bg-white/60 backdrop-blur-sm shadow-sm",
                className
            )}
        >
            {children}
        </div>
    );
}
