import type { CategoryPageProps } from "@/app/types";
import {getDisplayNameFromSlug} from "@/app/lib/categories";
export default async function CategoryPage({params}: CategoryPageProps) {
    const { categoryName } = await params
    const name = getDisplayNameFromSlug(categoryName)
    return <h1>{ name }</h1>
}
