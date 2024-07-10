import { IPerson } from "../types/person.type";
import config from "../../config.json";

export class PersonService {
    public static async create(p: IPerson) {
        // Push new user to DB
    }

    public static async findById(id: Number): Promise<IPerson | null> {
        // Find user by ID
        return await fetch(config.base_url + "People?_id="+id)
            .then(res => res.json())
            .then(res => res);
    }

    public static async update(p: IPerson) {
        // Update given user
    }
}