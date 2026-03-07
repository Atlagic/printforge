import { getModels } from "@/app/lib/models";
import ModelsGrid from "@/app/components/ModelsGrid";
import Form from "next/form"
import { JSX } from "react";
import { Model, ModelsPageProps } from "@/app/types";

export default async function ModelsPage({ searchParams }: ModelsPageProps): Promise<JSX.Element> {
    const { search } = await searchParams
    const models: Model[] = await getModels()
    const query: string = search?.toLowerCase() ?? ''

    const filteredModels: Model[] = query ? models.filter(({ name, description }: Model): boolean =>
        name.toLowerCase().includes(query) ||
        description.toLowerCase().includes(query)
    ) : models

    return (
        <>
            <Form action="/3d-models" className="w-full px-5 md:px-0 md:max-w-xl">
                <input
                    type="text"
                    name="search"
                    placeholder="E.g. dragon"
                    autoComplete="off"
                    defaultValue={query}
                    className="w-full py-3 pl-5 pr-5 text-sm placeholder-gray-500 bg-white border border-[#606060] rounded-full focus:border-[#606060] focus:outline-none focus:ring-0 md:text-base"
                />
            </Form>
            <ModelsGrid title="3D Models" models={filteredModels} />
        </>
    )
}
