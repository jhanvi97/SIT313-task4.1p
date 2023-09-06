import { faker } from "@faker-js/faker"

const stafflist = [{
    key:0,
    image: faker.internet.avatar(),
    name: faker.person.firstName(),
    position: faker.person.jobTitle()
},
{
    key:1,
    image: faker.internet.avatar(),
    name: faker.person.firstName(),
    name1: faker.person.lastName(),
    position: faker.person.jobTitle()
},
{
    key:2,
    image: faker.internet.avatar(),
    name: faker.person.firstName(),
    name1: faker.person.lastName(),
    position: faker.person.jobTitle()
},

]

export default stafflist