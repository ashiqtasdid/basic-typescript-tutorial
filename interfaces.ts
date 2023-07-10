// Interfactes are just like types but they are used to define the structure of an object

interface myUser {
    name: string;
    age: number;
    email: string;
    isActive: boolean;
    address?: string;
}

// Now let's try to create a user

let User: myUser = {
    name: 'Ashiq',
    age: 18,
    email: 'ashiqtasdid5@gmail.com',
    isActive: true,
    address: 'Mars'
}

console.log(User)

// Here is the result:
/*
    {
        name: 'Ashiq',
        age: 18,
        email: 'ashiqtasdid5@gmail.com',
        isActive: true,
        address: 'Mars'
    }
 */