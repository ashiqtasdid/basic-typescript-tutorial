// Unions in typescript means, you can use multiple types for a variable. 
// Let me walk you through this. Remember the time we created an array of strings & numbers?, we used multiple types there. That's called union.

// Let's see an example of union:

const yourName: (string | number)[] = [] // Here we are using union, [your name is not the anime. Just Kidding!]

yourName.push('Ashiq')
// also we can push a number to the array
yourName.push(123)
// let's see the result

console.log(yourName)

/*
    Here is the result:
    [ 'Ashiq', 123 ]
*/

// In this case we have used string and numbers. But we can use any type we want. Let's see another example:

const vector:(string | number | boolean)[] = []

vector.push('Ashiq')
vector.push(123)
vector.push(true)

// let's see the result

console.log(vector)

/*
    Here is the result:
    [ 'Ashiq', 123, true ]
*/