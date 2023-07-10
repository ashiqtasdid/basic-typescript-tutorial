// Moving on to arrays. We can declare an array of a certain type by using the following syntax:
// let arrayName: type[] = [value1, value2, value3, ...]

const languages = []

// Now let's try to add some values to the array

// languages.push('JavaScript') //It's throwing an error because we haven't declared the type of the array
// Let's add the type of the array to fix this error and the type is string

const languages2: string[] = []

// Now let's try to add some values to the array

languages2.push('JavaScript') // It's working fine now
console.log(languages2)
/* 
    Here is the result:
    [ 'JavaScript' ]
*/

// If we try to add a number to the array it will throw an error
// languages2.push(123) // This will throw an error because we have declared the type of the array as string
// To add multiple types to an array we can use the following syntax:

const languages3: (string | number)[] = []

// That means we can add string or number to the array

languages3.push('JavaScript') // It's working fine now
languages3.push(123) // It's also fine now

console.log(languages3)

/* 
    Here is the result:
    [ 'JavaScript', 123 ]
*/

// We can also use type to declare an array of objects

type arrayUser = {
    _id: string;
    name: string;
    age: number;
    email: string;
    isActive?: boolean; // We can also use optional variable here
}

const users: arrayUser[] = []

users.push({_id: '123', name:'Ashiq', age: 18, email: 'ashiqtasdid5@gmail.com'}) // We don't have to pass the isActive variable because it's optional

console.log(users)

/*
    Here is the result:
    [
        {
            _id: '123',
            name: 'Ashiq',
            age: 18,
            email: 'ashiqtasdid5@gmail.com'
        }
    ]
*/