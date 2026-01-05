//1. A function that adds two numbers

function add(a,b) {
    const sum = a + b;
    console.log(sum);
}

add(5,7);


//2. A function that checks if a number is even or odd

function evenodd(a){
    if(a%2 === 0){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
}

evenodd(5);
evenodd(10);

//3. A function that finds the largest of three numbers

function largestOfThree(a,b,c){
    let largest;
    if (a >= b && a >= c ){
        largest = a;
    } else if (b >= a && b >= c){
        largest = b;
    } else {
        largest = c;
    }

    console.log("Largest number : ", largest);
}

largestOfThree(10,5,2);
largestOfThree(15,20,18);
largestOfThree(20,18,25);

//4. A function that converts Celsius to Fahrenheit

function celsiusToFahrenheit(celsius){
        const Fahrenheit = (celsius * 9 / 5) + 32;
        console.log(celsius + "C =", Fahrenheit + "F");
}

celsiusToFahrenheit(30);