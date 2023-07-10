const user = {
    name: 'Ashiq',
    age: '18',
    email: 'ashiqtasdid5@gmail.com',
    isActive: true,
}

let createUser = (name: string, age: number, email: string, isActive: boolean) => {
}

// Or we can use type to do the same thing

type User = {
    name: string;
    age: number;
    email: string;
    isActive: boolean;
}

function createUser2(user: User): User{
    return user;
}

console.log(createUser2({name: 'Ashiq', age: 18, email: 'ashiqtasdid5@gmailcom', isActive: true}));