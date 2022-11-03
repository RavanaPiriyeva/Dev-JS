//Task 1
// 1. Find the minimum element of this array
// const arr = [1 ,8 ,-3,55,4]
// let min = arr[0]
// for(let i=0 ;i<arr.length;i++){
//     if(arr[i]<=min){
//         min=arr[i]
//     }
// }
// console.log(`Array:${arr}\nMin:${min}`)

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//Task 2
// 2. Find the maximum element of this array
// const arr = [1 ,89 ,-3,55,4]
// let max = arr[0]
// for(let i=0 ;i<arr.length;i++){
//     if(arr[i]>=max){
//         max=arr[i]
//     }
// }
// console.log(`Array:${arr}\nMax:${max}`)

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//Task 3
// 3. Find the index of the minimum element of this array
// const arr = [-10 ,8 ,-3,55,-5]
//     let min = arr[0]
//     let index
//     for(let i=0 ;i<arr.length;i++){
//         if(arr[i]<=min){
//             index=i
//         }
//     }
// console.log(`Array:${arr}\nMinimum index:${index}`)

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//Task 4
// 4. Find the index of the maximum element of this array
// const arr = [56 ,8 ,-3,55,4]
// let max = arr[0]
// let index
// for(let i=0 ;i<arr.length;i++){
//     if(arr[i]>=max){
//         index=i
//     }
// }
// console.log(`Array:${arr}\nMaximum index:${index}`)

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//Task 5
// 5. Calculate the sum of array's elements with odd indices
// const arr = [56 ,8 ,-3,55,4]
// sum=0
// for(let i=0 ; i<arr.length; i++)
// {
//     if(i%2==1)
//     {
//         sum+=arr[i]
//     }
// }
// console.log(`Array:${arr}\nSum:${sum}`)

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//Task 6
// 6. Reverse this array (array in reverse direction) - you have to create YOUR OWN function, which WILL NOT create any new array
// const arr = [56 ,8 ,-3,55,4,5]
// console.log(`Original array:${arr}`)
// let y
// let m
// if(arr.length%2==1){
//     m=(arr.length-1)/2+1
// }
// else{
//     m=arr.length/2
// }
// for(let i =0 ; i<m ; i++)
// {
// y=arr[i]
// arr[i]=arr[arr.length-i-1]
// arr[arr.length-i-1]=y
// }
// console.log(`Reversing array:${arr}`)

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//Task 7
// 7. Count the number of odd elements in the array
// const arr = [56 ,8 ,-3,55,4,5]
// let count =0
// for(let i= 0; i<arr.length;i++){
//     if(arr[i]%2==1 || arr[i]%2==-1){
//         count++
//     }
// }
// console.log(`Array:${arr}\nOdd number count:${count}`)

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//Task 8
// 8. Swap the first and second half of the array, for example, for an array of 1234, the result is 3412, or for 12345 the result will be 45312.
// const arr = [56, 8, -3, 55,8,9,10];//55 5 -3 56 8
// console.log(`Original array:${arr}`);
// let y;
// let m;
// if (arr.length % 2 == 1) {
//   m = (arr.length - 1) / 2 ;
// } else {
//   m = arr.length / 2;
// }
// for (let i = 0; i < m; i++) {
//     y = arr[i];
//     if(arr.length%2==0){
//         arr[i] = arr[i+m];
//         arr[i+m] = y;
//     }
//     else{
//       arr[i] = arr[i+m+1];
//       arr[i+m+1] = y;
//     }
// }
// console.log(`Reversing array:${arr}`)

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//Task 9
// 9. Sort the array in ascending order in one of the following ways: bubble sort, selection sort or insertion sort.
//insertion sort
// const arr = [56 ,-3,55,4,5]
// console.log(`Original array:${arr}`)
// let t=1
// for(let i=1; i<arr.length ;i++){
//   let m =i
//   for(let x=i-1;x>=0;x--){
//     if(arr[m]<arr[x])
//     {
//       let y= arr[m]
//       arr[m]=arr[m-1]
//       arr[m-1]=y
//       console.log(`     //Step${t}:  ${arr}`)
//       t++
//     }
//     m--
//   }

// }
// console.log(`Sorting array:${arr}`)

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//Task10
// 10. Sort the array in descending order in one of the ways (different from the method taken in the 9th task): bubble sort, selection sort or insertion sort.
//bubble sort
// const arr = [56 ,-3,15,4,98]
// console.log(`Original array:${arr}`)
// let x=0
// let t=1
// while(x<=arr.length-1){
//     let m= 1
//     for(let i = 0;i<arr.length-x;i++){
//         if(arr[i]<arr[i+1]){
//           let y = arr[i]
//           arr[i]=arr[i+1]
//           arr[i+1]=y
//         }
//         console.log(`     //Step ${t}.${m}:  ${arr}`)
//         m++
//       }
//       x++
//       t++
// }
// console.log(`Sorting array:${arr}`)
