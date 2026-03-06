import Link from 'next/link'
import type { NavLinkProps } from "@/app/types";
import { JSX } from "react";

export default function NavLink({ href, children, isActive } : NavLinkProps): JSX.Element {
    return (
        <li className="text-sm uppercase">
            <Link href={href} className={`${isActive ? 'text-orange-accent': 'text-gray-700' } px-4 py-2 transition-colors rounded-md cursor-pointer hover:text-orange-accent`}>
                { children }
            </Link>
        </li>
    )
}
