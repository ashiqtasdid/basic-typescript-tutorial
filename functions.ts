
function multiplyTwo(num1: number){
    return num1 * 2;
}

multiplyTwo(8)


function signUp(name: string, email: string, password: any){
    return name + ' ' + email + ' ' + password;
}

console.log(signUp('Ashiq', 'ashiqtasdid5@gmail.com', 1222));

// Or I could use an arrow function

let logIn = (username: string, password: any) => {
    return username + ' ' + password;
}

console.log(logIn('Ashiq', 1234));

// Using Void - Void is used when you don't want to return anything

let errorHandler = (error: string):void => {
    console.log(error)
}

// Or I can use never to return nothing as well

let neverHandler = (error: string):never => {
    throw new Error(error);
}