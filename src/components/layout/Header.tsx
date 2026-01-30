import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full bg-[#F4EFE8] pt-8 pb-4">
            <div className="container mx-auto px-4 flex items-center justify-center">
                <Link href="/" className="relative w-full md:w-[80%] aspect-[3/1] max-w-4xl">
                    <Image
                        src="/logo.png"
                        alt="Savour Skiathos Restaurant"
                        fill
                        className="object-contain"
                        priority
                    />
                </Link>
            </div>
        </header>
    );
}
