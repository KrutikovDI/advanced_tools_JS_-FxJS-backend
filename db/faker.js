const { faker } = require('@faker-js/faker');

function createRandomUser() {
  return {
    id: faker.string.uuid(),
    from: faker.internet.exampleEmail(),
    subject: `Hello from ${faker.person.firstName()}`,
    body: "Long message body here",
    received: faker.date.anytime(),
  };
}

module.exports = createRandomUser;