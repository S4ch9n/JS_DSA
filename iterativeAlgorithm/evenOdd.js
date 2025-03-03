//check which number is even or odd
let arr = [1,2,3,4,5,6,7,8,9,10]
for(let element of arr){
    if(element % 2 == 0){
        console.log(`${element} is even`)
    }else{
        console.log(`${element} is odd`)
    }
}