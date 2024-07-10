import { PersonService } from "./services/person.services";
import { ProjectService } from "./services/project.services";

async function main() {
    try {
        console.log("Freelancer Portal Prototype WEW");

        // Login the user
        const loggedInUserId = 2;
        const person = await PersonService.findById(loggedInUserId);
        if (person == null) console.log("This shit is empty");

        // Look at what projects exist
        const projects = await ProjectService.getUsersProjects();
        if (projects == null) console.log("No projects found lel");

        // Open a client portal
    } catch (error) {
        console.error('Error fetching users:', error); // Handle errors
    }
}

// Call the main function to execute the code
main();