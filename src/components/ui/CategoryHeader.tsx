interface CategoryHeaderProps {
    title: string;
}

export default function CategoryHeader({ title }: CategoryHeaderProps) {
    return (
        <h2 className="text-2xl font-medium border-b border-[#3A3834] pb-2 mb-6 mt-8 text-[#3A3834] uppercase">
            {title}
        </h2>
    );
}
