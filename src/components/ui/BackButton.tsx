import Link from "next/link";

export default function BackButton() {
    return (
        <Link
            href="/"
            className="fixed top-5 left-5 bg-[#3A3834] text-[#F4EFE8] px-5 py-2.5 rounded-[5px] text-base font-normal z-50 hover:bg-opacity-90 transition-opacity"
        >
            Back
        </Link>
    );
}
