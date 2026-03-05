import { PillProps } from "@/app/types";
import { JSX } from "react";

export default function Pill({ children, className = "" }: PillProps): JSX.Element {
    return (
        <span
            className={`inline-block bg-transparent border border-gray-400 rounded-full px-3 py-1 text-sm text-gray-800 ${className}`}
        >
            {children}
        </span>
    )
}
