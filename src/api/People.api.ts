import { IPeople } from "../types/people.type";

export async function People() {
    function getById(id: number): IPeople | null | undefined {
        return null;
    }
    function getByName(): IPeople | IPeople[] | null | undefined {
        return null;
    }
    function update(p: IPeople): boolean {
        return false;
    }
    function remove(id: number): boolean {
        return false;
    }
}