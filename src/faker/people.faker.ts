import { faker } from '@faker-js/faker';
import { IPeople } from '../types/people.type';

function createRandomUser(): IPeople {
    const sex = faker.person.sexType();
    const firstName = faker.person.firstName(sex);
    const lastName = faker.person.lastName();
    const email = faker.helpers.unique(faker.internet.email, [
      firstName,
      lastName,
    ]);
  
    return {
      _id: faker.string.uuid(),
      avatar: faker.image.avatar(),
      email,
      firstName,
      lastName,
      subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business']),
    };
  }

