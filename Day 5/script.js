//1.A loop that prints numbers from 1 to 50 and prints "even" for even numbers.

for(let i=0; i<=50 ; i++){
    if(i%2 === 0){
        console.log(i, " Even")
    }else{
        console.log(i);    
    }
}

//2. An array of numbers and a function that returns only even numbers using filter

const kbb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}

console.log(getEvenNumbers(kbb));

//3. An object student with name, age, and skills (array)

const student = {
    name: "Khubaib Ahmad Khan" , 
    age: 20,
    skills: ["html" , "css" , "javascript"]
};

//4. Add a new skill to the object

student.skills.push("Next JS");

//5. Use a loop to print all keys and values of the object

const keys = Object.keys(student);

for (let i = 0; i < keys.length; i++) {
  console.log(keys[i] + " : " + student[keys[i]]);
}
