import { IPeople } from "./people.type";

export default interface IProject {
    _id: string;
    pr_title: string;
    pr_description: string | undefined;
    pr_client: string;
}