let num1 = 4;
let num2 = 5;

const product = (x,y) =>{
    return x*y;
}

console.log(product(num1,num2));

const student = {
    name : 'ayan',
    age : 22,
    greet(){
        console.log('hi i am '+this.name);
    }
}
student.greet()