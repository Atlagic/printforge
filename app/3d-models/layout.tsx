import CategoriesNavbar from "@/app/components/CategoriesNavbar";
import type { JSX, ReactNode } from "react";
export default function ModelsLayout({ children }: { children: ReactNode }): JSX.Element {
    return (
        <div className="relative flex flex-col min-h-screen md:flex-row">
            <CategoriesNavbar />
            {/* Main Content Area */}
            <main className="flex-1 p-4 md:ml-64">
                { children }
            </main>
        </div>
    )
}
