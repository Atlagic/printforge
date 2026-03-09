import modelsData from "../data/models.json"
import type { Model, GetModelsParams } from "../types"

async function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
export async function getModels({ category }: GetModelsParams = {}): Promise<Model[]> {
    await sleep(2000) // slowing down in order to see the loading skeleton
    let filteredModels: Model[] = [...modelsData]
    if( category ) {
        filteredModels = modelsData.filter((model: Model): boolean => model.category === category )
    }
    return filteredModels
}

export async function getModelById(id: string | number): Promise<Model> {
    const foundModel: Model | undefined = modelsData.find(
        (model: Model) => model.id.toString() === id.toString()
    )
    if (!foundModel) {
        throw new Error(`Model with id ${id} not found`)
    }
    return foundModel
}
