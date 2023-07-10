// Following the tutorial, this file is used to create a read-only property on the class.

type dbUser = {
    // Here we are using the type to create a read-only property called id. Which can't be changed.
    readonly _id: string; 
    name: string;
    age: number;
    email: string;
    isActive: boolean;
}

// Creating a user
// For this I will be using a variable

let myUser: dbUser = {
    _id: '123',
    name: 'Ashiq',
    age: 18,
    email: 'ashiqtasdid5@gmail.com',
    isActive: true,
}
// Now we can't change the id of the user
// myUser._id = '456'; // This will throw an error

console.log(myUser)