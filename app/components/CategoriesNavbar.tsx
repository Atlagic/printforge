import { getAllCategories } from "@/app/lib/categories";
import Link from "next/link"
import { JSX } from "react";
import { Category } from "@/app/types";
export default function CategoriesNavbar(): JSX.Element {
    const categories: Category[] = getAllCategories()
    return (
        <div>
            <nav>
                <Link href="/3d-models">All</Link>
                { categories.map((category) => (
                    <Link key={category.slug} href={`/3d-models/categories/${category.slug}`}>
                        { category.displayName }
                    </Link>
                ))}
            </nav>
        </div>
    )
}
