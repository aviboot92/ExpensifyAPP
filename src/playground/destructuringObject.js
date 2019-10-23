const person = {
    name: 'Avinash',
    gender: 'Male',
    location:{
        temp: 90,
        city: 'Hyderabad'
    }
}

const {name = 'Anonymous',age = 27, gender} = person;

console.log(`Hi I am ${name}. I am ${age} years old.`);
const {temp: temperature = 85, city} = person.location;

console.log(`I live in ${city}. My city is ${temperature} hot`);

//  Array destructuring

const address = ['1229 Larrabee st', 'Phily', , '19020'];
const [,area,state = 'PA'] = address;

console.log(`I live ${area}, which is in ${state}`);