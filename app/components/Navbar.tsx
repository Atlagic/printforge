"use client"

import Image from "next/image";
import Link from "next/link";
import NavLink from '@/app/components/NavLink'
import PrintforgeLogo from "@/public/printforge-logo.svg"
import PrintforgeLogoIcon from "@/public/printforge-logo-icon.svg"
import { JSX } from "react";
import { usePathname } from "next/navigation";

export default function Navbar(): JSX.Element {
    const pathName = usePathname()
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
                    <NavLink href="/3d-models" isActive={pathName.startsWith("/3d-models")}>3D Models</NavLink>
                    <NavLink href="/about" isActive={pathName === "/about"}>About</NavLink>
                </ul>
            </nav>
        </header>
    )
}
