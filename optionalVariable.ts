type optionalUser = {
    _id: string;
    name: string;
    age: number;
    email: string;
    isActive: boolean;
    // Optional variable
    address?: string;
    // By using '?' we can mark a variable as optional, that means even if we don't pass the variable it won't throw an error.
}

// Now let's try this with a function

function optionalCreateUser(user: optionalUser): optionalUser {
    return user;
}
// Now let's try to pass a user without the address variable
console.log(optionalCreateUser({ _id: '1235', name: 'Ashiq', age: 18, email: 'ashiqtasdid5@gmail.com', isActive: true }))
/*
    Here is the result: 
    {
        _id: '1235',
        name: 'Ashiq',
        age: 18,
        email: 'ashiqtasdid5@gmail.com',
        isActive: true
    }
*/

// Now let's try to pass a user with the address variable
console.log(optionalCreateUser({ _id: '1235', name: 'Ashiq', age: 18, email: 'ashiqtasdid5@gmail.com', isActive: true, address: 'Mars' }));
/*
    Here is the result:
    {
        _id: '1235',
         name: 'Ashiq',
        age: 18,
         email: 'ashiqtasdid5@gmail.com',
        isActive: true,
        address: 'Mars'
    }
*/