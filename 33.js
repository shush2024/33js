// a)---------------------------------------------------------------------------------------------------------------------
// function sumOfdigit(num) {
//     let str = num + "";
//     let sum = 0;
//     for(let i = 0; i < str.length; i++){
//         sum = sum + +str[i]
//     }
//     return sum;
// }
// // console.log(sumOfdigit(66));
// let arr = [66,84,390,,4567,12,89];
// let c = 12;
// let count = 0;
// for(let i = 0; i < arr.length; i++){
//     if(sumOfdigit(arr[i]) === c){
//         count++
//     }
// }
// console.log(count);
// b)---------------------------------------------------------------------------------------------------------------------

// function f(num) {
//     while (num != 1) {
//         if(num % 2 !== 0){
//             return false
//         }else {
//             num = num /2
//         }
//     }
//    return true 
// }
// console.log(f(128));

// function f(num) {
//     if((num & (num - 1)) === 0){
//         return true
//     }else{
//         return false
//     }
    
// }
// console.log(f(16));



// function f(num) {
//     return (num & (num - 1)) === 0;
    
// }
// console.log(f(16));
// let arr = [2,45,64,4,67,87];
// let res = 1;
// for(let i = 0; i < arr.length; i++){
//     if(f(arr[i]) === true){
//         res = res * arr[i]
//     }
// }

// console.log(res);


// g)---------------------------------------------------------------------------------------------------------------------
// function isFactprial(num) {
//     let i = 1;
//     while (num !== 1) {
//         if(num % i != 0){
//             return false
//         }else{
//             num = num/i;
//             i++;
//         }
//     }
//     return true
// }
// console.log(isFactprial(120));

// let arr = [6,120,45,67,8,24]
// let sum = 0;
// let count = 0;

// for(let i = 0; i < arr.length; i++){
//     if(isFactprial(arr[i]) === true){
//         sum = sum + arr[i]
//         count++
//     }
// }
// let mijin = sum / count
// console.log(mijin);
// d)------------------------------------------------------------------------------------------------------------------------

// function isPerfect(num) {
//     let sum = 0;
//     for(let i = 1; i <= num/2; i++){
//         if(num % i === 0){
//             sum = sum + i;
//         }
    
//     }
//     if(sum === num){
//         return true
// }
// return false
// }

// console.log(isPerfect(6));

// arr = [24,25,4,28,6,12,6]
// let sum = 0;
// for(let i = 0; i < arr.length;i++){
//     if(isPerfect(arr[i]) === true){
//         sum = sum + arr[i]
//     }
// }
// console.log(sum);

// e)----------------------------------------------------------------------------------------------------------------------
// function isSimple(num) {
//     sum = 0;
//     for(let i = 2; i <= num/2; i++){
//         if(num%i === 0){
//         return false
//         }
//     }
//     return true
// }
// console.log(isSimple(4));


// arr = [3,7,3,4,6,7,12,6]
// let count = 1;
// for(let i = 0; i < arr.length; i++){
//     if(isSimple(arr[i]) === true){
//         count = count * arr[i]
//     }
// }
// console.log(count);

// z)-----------------------------------------------------------------------------------------------------------------------

// function isFib(num) {
//     let fib1 = 1;
//     let fib2 = 1;
//     let next;
//     while (fib2 < num) {
//         next = fib1 + fib2;
//         fib1 = fib2;
//         fib2 = next;
//     }
//     if(fib2 == num){
//         return true
//     }else{
//         return false
//     }
    
// }
// console.log(isFib(8));
