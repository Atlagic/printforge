import { getModels } from "@/app/lib/models";
import ModelsGrid from "@/app/components/ModelsGrid";
import {JSX} from "react";

export default async function ModelsPage():Promise<JSX.Element> {
    const models = await getModels()
    return (
        <>
            <ModelsGrid title="3D Models" models={models} />
        </>
    )
}
