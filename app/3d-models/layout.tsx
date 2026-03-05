import CategoriesNavbar from "@/app/components/CategoriesNavbar";
import type { JSX, ReactNode } from "react";
export default function ModelsLayout({ children }: { children: ReactNode }): JSX.Element {
    return (
        <>
            <CategoriesNavbar />
            { children }
        </>
    )

}
