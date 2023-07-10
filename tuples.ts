// in this file we will learn about tuples in typescript
// When we use unions, we actually don't define the positions of the elements. But in tuples we do.

let tupleUser: [string, number, boolean] = ['Ashiq', 18, true];

// but if we change the positions of the elements, it will throw an error
// tupleUser = [18, 'Ashiq', true]; // This will throw an error

// But if we want to use unions in tuples, we can do that too
let tupleUser2: [string | number, number | boolean] = ['Ashiq', 18];
tupleUser2 = [18, true];
