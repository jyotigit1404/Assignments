// Jumping Statement

/*Jumping statement are all about the set of key words we are going to use to stop the execution 
or to stop the current iteration.

There are 3 jumping statement we have in JS and TS
1. break: reak statement is going to stop the complete execution nad comme out from the loop.
2. Continue: continue: here continue statement is going to stop the current iteration and jump to the next iteration.
3. Return: It will return the value inside the function, so that the function variable will be assign some value.

*/

/*
for(let i:number = 1; i<=10; i++){
if(i==5){
    break;//break: here break statement is going to stop the complete execution nad comme out from the loop.
}
console.log(i)
}
for(let i:number = 1; i<=10; i++){
if(i==5){
    continue;//continue: here continue statement is going to stop the current iteration and jump to the next iteration.
    }
console.log(i)
}*/

for(let i:number = 1; i<=10; i++){
if(i==5){
    continue;//Return: return stmt will return the value inside the function, so that the function variable will be assign some value.

    }
console.log(i)
}