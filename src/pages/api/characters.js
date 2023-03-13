import {faker} from "@faker-js/faker";


const fakeChars = []

Array.from({length:12}).forEach(()=>{
    fakeChars.push({
        id: faker.datatype.uuid(),
        animal: faker.animal.type(),
        age: faker.datatype.number({min:1, max:16}),
        name: faker.name.firstName(),
        personality: faker.word.adjective(),
        health:faker.datatype.number({min:5, max:8}),
        level: faker.datatype.number({min:1, max:5}),
        occupation: faker.name.jobType(),
        kryptonite: faker.science.chemicalElement(),
        spells: faker.lorem.words(8),
        image: faker.image.animals(),
        description: faker.lorem.paragraph()

    })
})

const  handler = (req, res) => {
    res.status(200).json({fakeChars })
}

export default handler