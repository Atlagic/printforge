import type { CategoryPageProps, Model } from "@/app/types";
import {getDisplayNameFromSlug} from "@/app/lib/categories";
import ModelsGrid from "@/app/components/ModelsGrid";
import { getModels } from "@/app/lib/models";
import { JSX } from "react";
export default async function CategoryPage({params}: CategoryPageProps):Promise<JSX.Element> {
    const { categoryName } = await params
    const models: Model[] = await getModels({ category: categoryName })
    const title: string = getDisplayNameFromSlug(categoryName)

    return (
        <ModelsGrid title={title} models={models} />
    )
}
