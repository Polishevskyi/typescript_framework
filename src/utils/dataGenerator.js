import { faker } from '@faker-js/faker';

// API data generators
const generatePet = () => ({
  id: faker.number.int({ min: 1, max: 100000 }),
  category: {
    id: faker.number.int({ min: 1, max: 100 }),
    name: faker.helpers.arrayElement(['Dogs', 'Cats', 'Birds', 'Fish', 'Reptiles']),
  },
  name: faker.person.firstName(),
  photoUrls: [faker.image.urlLoremFlickr({ category: 'animals' })],
  tags: [
    {
      id: faker.number.int({ min: 1, max: 100 }),
      name: faker.word.noun(),
    },
  ],
  status: faker.helpers.arrayElement(['available', 'pending', 'sold']),
});

const generatePetUpdate = (existingPet) => ({
  id: existingPet.id,
  name: faker.animal.type(),
  category: existingPet.category,
  photoUrls: existingPet.photoUrls,
  tags: existingPet.tags,
  status: faker.helpers.arrayElement(['available', 'pending', 'sold']),
});

// Web data generator
class DataGenerator {
  static generateUserInfo() {
    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      postalCode: faker.location.zipCode(),
    };
  }
}

export { generatePet, generatePetUpdate };
export default DataGenerator;
