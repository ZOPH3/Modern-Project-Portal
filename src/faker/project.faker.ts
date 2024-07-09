import { faker } from '@faker-js/faker';
import IProject from '../types/project.type';

function createRandomProject(): IProject {
    return {
        _id: faker.string.uuid(),
        pr_title: faker.word.words(7), 
        pr_description: faker.word.words(12), 
        pr_client: faker.string.uuid()
    };
}

