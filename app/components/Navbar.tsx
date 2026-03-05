import Image from "next/image";
import Link from "next/link"
import PrintforgeLogo from "@/public/printforge-logo.svg"
import PrintforgeLogoIcon from "@/public/printforge-logo-icon.svg"
import { JSX } from "react";
export default function Navbar(): JSX.Element {
    return (
        <header className="w-full bg-white">
            <nav className="flex justify-between px-6 py-4">
                <Link href="/">
                    <div className="relative cursor-pointer">
                        {/* Desktop logo */}
                        <Image
                            src={PrintforgeLogo}
                            alt="PrintForge Logo"
                            className="w-[200px] h-auto hidden md:block"
                        />
                        {/* Mobile logo */}
                        <Image
                            src={PrintforgeLogoIcon}
                            alt="PrintForge Logo"
                            className="w-[40px] h-auto block md:hidden"
                        />
                    </div>
                </Link>
                <ul className="flex items-center gap-2.5">
                    <li className="text-sm uppercase cursor-pointer">
                        <Link href="/3d-models">3D Models</Link>
                    </li>
                    <li className="text-sm uppercase cursor-pointer">
                        <Link href="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
