import { getAllModels } from "@/app/lib/models";
import ModelsGrid from "@/app/components/ModelsGrid";
import {JSX} from "react";
import CategoriesNavbar from "@/app/components/CategoriesNavbar";

export default async function ModelsPage():Promise<JSX.Element> {
    const models = await getAllModels()
    return (
        <>
            <ModelsGrid title="3D Models" models={models} />
        </>
    )
}
