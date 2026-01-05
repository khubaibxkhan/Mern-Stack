//1. A function that adds two numbers

function add(a,b) {
    const sum = a + b;
    return sum;
}

//2. A function that checks if a number is even or odd

function evenodd(a){
    if(a%2==0){
        return "Even";
    }
    else{
        return "Odd";
    }
}

//3. A function that finds the largest of three numbers

function largestofThree(a,b,c){
    if (a >= b && a >= c ){
        return a;
    } else if (b >= a && b >= c){
        return b;
    } else {
        return c;
    }
}