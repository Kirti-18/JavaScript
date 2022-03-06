//1. Use for loop to output even numbers from 2 to 10
for (let i=2 ; i<=10 ; i++){
    if (i%2 == 0){
        alert(i);
    }
}

/*2. Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.*/

let input = prompt("Enter the number",0);
while(input <= 100 && input){
    input = prompt("Enter the number","");
}

//3.Output prime numbers 
let new_input = +prompt("Enter the upper end",0);
let arr = [];
if (new_input){
    prime:for(let i=2; i<=new_input; i++){
        for(let j=2; j<i; j++){
            if (i%j == 0) continue prime;                
        }
        arr.push(i);
    }
}
alert(arr);

