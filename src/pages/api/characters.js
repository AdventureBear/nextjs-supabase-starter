import {faker} from "@faker-js/faker";


const fakeChars = []

Array.from({length:12}).forEach(()=>{
    fakeChars.push({
        id: faker.datatype.uuid(),
        animal: faker.animal.type(),
        age: faker.datatype.number({min:1, max:16}),
        name: faker.name.firstName(),
        image: faker.image.imageUrl(),
        description: faker.lorem.paragraph()

    })
})

export default function handler(req, res) {
    res.status(200).json({fakeChars })
}