import IProject from "../types/project.type";
import config from "../../config.json";

export class ProjectService {
    public static async getUsersProjects(): Promise<IProject[] | null> {
        return fetch(config.base_url + 'Project')
            .then((res) => res.json())
            .then((res) => res);
    }
}