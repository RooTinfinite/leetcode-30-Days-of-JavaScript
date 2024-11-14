type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { "id": number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
    const array = arr1.concat(arr2)
    const objectMapById = new Map()
    for(const element of array) {
        if(objectMapById.has(element.id)) {
            objectMapById.set(element.id,  Object.assign(objectMapById.get(element.id), element))
        } else {
            objectMapById.set(element.id, element)
        }
    }


    return Array.from(objectMapById.values()).sort((a , b) => a.id - b.id)
};
