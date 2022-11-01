//Task 1
// const a = +prompt("Please enter one number A:")
// for(let i = 0 ;i<1000 ;i++){
//     if(i%a==0){
//         console.log(i)
//     }
// }




//Task 2
//  const a = +prompt("Please enter one number A:")
// let count = 0
// for(let i =1 ; i*i<a ; i++){
//     count++ 
// }
// console.log(count)



//Task 3
// const a = +prompt("Please enter one number A:")
// let bigNum 
// for(let i = 1 ; i<a ;i++){
// if(a%i==0){
//     bigNum=i
// }
// }
// console.log(bigNum)


//Task 4
// const a = +prompt("Please enter one number A:")
// const b = +prompt("Please enter one number B:")
// let x
// let y
// let sum=0
// if(a>b){
//     y=a
//     x=b
// }
// else if(a<b){
//     y=b
//     x=a
// }
// else{
//     console.log("this is not range !! Please enter different number")
// }

// for(let i =x ;i<y ;i++){
//     if(i%7==0){
//         sum=sum+i
//     }
// }
// console.log(sum)



//Task 5
// const a = +prompt("Please enter one posotive number A:")
// let x= 0
// let y =1
// let b
// if(a>0){
// for(let i =0 ;i<a-2 ;i++){
// b =x+y
// x=y
// y=b
// }
// console.log(b)
// }
// else(
//     console.log("Please enter posotive number!!!")
// )


//Task 6

// const a = +prompt("Please enter one number A:")
// const b = +prompt("Please enter one number B:")

// let x
// let y
// if(a>b){
//     x=a
//     y=b
// }
// else if(a<b){
//     x=b
//     y=a
// }
// else(
//     console.log(x)
// )
// let r
// let m
// do{
    
//     r= x- (Math.floor(x/y))*y
//     x=y
//     m=y
//     y=r
// }
// while(r!==0)
// console.log(m)





//Task 7

// const a = +prompt("Please enter one number A:")
// let x = a.toString().length
// let m = 0
// let y=a

// for (let i =0 ; i<x ;i++){
//   m = m*10+y%10
//   y=(y-y%10 )/ 10
// }
// console.log(`Entered number:${a}\nResult:${m}`)


//Task 8

// const a = +prompt("Please enter one number A:")
// const b = +prompt("Please enter one number B:")
// let m=a
// let x
// let n
// let check;
// for(let i=0; i<a.toString().length;i++)
// {
// n=m%10
// m=(m-m%10)/10
// let y=b
// let count =0
//     do{
//         x = y%10
//         y = (y-y%10)/10
//         count++;
        
//     }
//     while(x!=n && count<b.toString().length)
//     if(x==n){
//         check=true;;
//         console.log(a+"\n"+b+"\n"+"true")
//             break;
//         }
    
// }
// if(check!=true){
//     console.log(a+"\n"+b+"\n"+"False")
// }