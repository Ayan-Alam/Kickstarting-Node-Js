//2.
const fruit =  ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon']

const updated_fruit = fruit.map(i=>(i==' '?'Empty String':i))

//console.log(updated_fruit);

const obj1 = {'key1': 1 , 'key2' : 2}

const obj2 = { ...obj1, key1: 1000}

console.log(obj1)
console.log(obj2)

