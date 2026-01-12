//1. A function that adds two numbers

function add(a,b) {
    const sum = a + b;
    return sum;
    
}

console.log(add(5,7));


//2. A function that checks if a number is even or odd

function evenodd(a){
    if(a%2 === 0){
        return "Even";
    }
    else{
        return "Odd";
    }
}

console.log(evenodd(5));
console.log(evenodd(10));

//3. A function that finds the largest of three numbers

function largestOfThree(a,b,c){
    let largest;
    if (a >= b && a >= c ){
        return a;
    } else if (b >= a && b >= c){
        return b;
    } else {
        return c;
    }
}

console.log(largestOfThree(10,5,2));
console.log(largestOfThree(15,20,18));
console.log(largestOfThree(20,18,25));

//4. A function that converts Celsius to Fahrenheit

function celsiusToFahrenheit(celsius){
        const Fahrenheit = (celsius * 9 / 5) + 32;
        return Fahrenheit;
}

console.log(celsiusToFahrenheit(30));
