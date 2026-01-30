interface MenuItemProps {
    name: string;
    description?: string;
    price?: string;
}

export default function MenuItem({ name, description, price }: MenuItemProps) {
    return (
        <div className="py-2 mb-2 break-inside-avoid">
            <div className="flex justify-between items-baseline">
                <h3 className="text-lg font-bold text-[#3A3834] uppercase leading-tight">{name}</h3>
                {price && <span className="text-lg font-bold ml-4 whitespace-nowrap">{price}</span>}
            </div>
            {description && <p className="text-sm text-[#3A3834] mt-1 italic">{description}</p>}
        </div>
    );
}
