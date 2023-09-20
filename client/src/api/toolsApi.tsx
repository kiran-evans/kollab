/**
 * 
 * @param name - The name of the Tool to be queried.
 * @returns A Promise containing an array of any found Tools;
 */
export const getToolsByName = async (name: string) => {
    const res = await fetch(`/api/tool?name=${name}`, {
        method: 'GET'
    });

    if (!res.ok) {
        throw Error(res.statusText);
    }

    return res;
}