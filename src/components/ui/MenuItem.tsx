interface MenuItemProps {
    name: string;
    description?: string;
    price?: string;
    showDivider?: boolean;
}

export default function MenuItem({ name, description, price, showDivider }: MenuItemProps) {
    return (
        <div className={`py-2 mb-2 break-inside-avoid${showDivider ? " border-b border-[#3A3834]/20 pb-3 mt-4" : ""}`}>
            <div className="flex justify-between items-baseline">
                <h3 className={showDivider ? "text-2xl font-extrabold text-[#3A3834] uppercase leading-tight tracking-wide" : "text-lg font-bold text-[#3A3834] uppercase leading-tight"}>{name}</h3>
                {price && <span className={`${showDivider ? "text-2xl font-extrabold" : "text-lg font-bold"} ml-4 whitespace-nowrap`}>{price}€</span>}
            </div>
            {description && <p className="text-sm text-[#3A3834] mt-1 italic">{description}</p>}
        </div>
    );
}
