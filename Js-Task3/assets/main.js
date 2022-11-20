
let a = 0;
let b = 0;
let c = 0;

function enterValue1() {
    a = +prompt("please enter the value of A:")
}
function enterValue2() {
    a = +prompt("please enter the value of A:")
    b = +prompt("please enter the value of B:")
}
function enterValue3() {
    a = +prompt("please enter the value of A:")
    b = +prompt("please enter the value of B:")
    c = +prompt("please enter the value of C:")
}
function Task1_1() {
    enterValue2();
    let result1 = a / b
    let result2 = a % b;
    console.log("Result:" + result1)
    console.log("Remainder :" + result2)
}

function Task1_2() {
    enterValue2()
    let c;
    c = a;
    a = b;
    b = c;
    console.log("A:" + a)
    console.log("B:" + b)
}

function Task1_3() {
    enterValue3()
    if (a == 0 && b == 0 && c == 0) {
        console.log("please enter correct number")
    }
    else {
        let x = (c - b) / a
        console.log("X:" + x)
    }
}

function Task1_4() {
    enterValue2()
    let result = '';
    if (a > b) {
        result = a + b
    }
    else if (a == b) {
        result = a * b
    }
    else {
        result = a - b
    }
    console.log("Result:" + result)
}

function Task1_5() {
    enterValue3();
    let discriminant = b * b - 4 * a * c
    let x1 = '';
    let x2 = '';
    if (discriminant > 0) {
        x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        console.log("X1:" + x1 + "\n" + "X2:" + x2)
    }
    else if (discriminant == 0) {
        x1 = x2 = -b / (2 * a);
        console.log("X:" + x1)
    }
    else {
        let realPart = (-b / (2 * a)).toFixed(2);
        let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
        console.log(`X1:${realPart} + ${imagPart}i \n  X2:${realPart} - ${imagPart}i`);
    }
}

function Task1_6() {
    enterValue1()
    let numLen = a.toString().length
    let first = ""
    let second = ""

    if (numLen > 2 && numLen == 0) {
        console.log("Please enter two-digit number !")
    }
    else {
        if (Math.floor(a / 10) == 1 && a % 10 == 0) {
            first = "ten"
        }
        else if (Math.floor(a / 10) == 2)
            first = "Twenty"
        else if (Math.floor(a / 10) == 3)
            first = "Thirty"
        else if (Math.floor(a / 10) == 4)
            first = "Forty"
        else if (Math.floor(a / 10) == 5)
            first = "Fifty"
        else if (Math.floor(a / 10) == 6)
            first = "Sixty"
        else if (Math.floor(a / 10) == 7)
            first = "Seventy"
        else if (Math.floor(a / 10) == 8)
            first = "Eighty"
        else if (Math.floor(a / 10) == 9)
            first = "Ninety"
    }

    if (numLen <= 2 && a % 10 != 0 && Math.floor(a / 10) != 1) {
        if (a % 10 == 1)
            second = "one"
        else if (a % 10 == 2)
            second = "two"
        else if (a % 10 == 3)
            second = "three"
        else if (a % 10 == 4)
            second = "four"
        else if (a % 10 == 5)
            second = "five"
        else if (a % 10 == 6)
            second = "six"
        else if (a % 10 == 7)
            second = "seven"
        else if (a % 10 == 8)
            second = "eight"
        else if (a % 10 == 9)
            second = "nine"

    }
    if (a > 10 && a < 20) {
        if (a % 10 == 1)
            second = "Eleven"
        else if (a % 10 == 2)
            second = "Twelve"
        else if (a % 10 == 3)
            second = "Thirteen"
        else if (a % 10 == 4)
            second = "Fourteen"
        else if (a % 10 == 5)
            second = "Fifteen"
        else if (a % 10 == 6)
            second = "Sixteen"
        else if (a % 10 == 7)
            second = "Seventeen"
        else if (a % 10 == 8)
            second = "Eighteen"
        else if (a % 10 == 9)
            second = "Nineteen  "
    }
    console.log(first + " " + second)
}

function Task1_7() {
    enterValue3();
    x = a
    y = b
    r = c
    console.log(`X:${x}\nY:${y}\nR:${r}`)
    let point = x * x + y * y
    if (point < r * r) {
        console.log("(x,y) is inside a circle ")
    }
    else {
        console.log("(x,y) is not inside a circle ")
    }
}

function Task2_1() {
    enterValue1()
    for (let i = 0; i < 1000; i++) {
        if (i % a == 0) {
            console.log(i)
        }
    }
}

function Task2_2() {
    enterValue1()
    let count = 0
    for (let i = 1; i * i < a; i++) {
        count++
    }
    console.log(count)
}

function Task2_3() {
    enterValue1()
    let bigNum
    for (let i = 1; i < a; i++) {
        if (a % i == 0) {
            bigNum = i
        }
    }
    console.log(bigNum)
}

function Task2_4() {
    enterValue2()
    let x
    let y
    let sum = 0
    if (a > b) {
        y = a
        x = b
    }
    else if (a < b) {
        y = b
        x = a
    }
    else {
        console.log("this is not range !! Please enter different number")
    }

    for (let i = x; i < y; i++) {
        if (i % 7 == 0) {
            sum = sum + i
        }
    }
    console.log(sum)

}

function Task2_5() {
    enterValue1()
    let x = 0
    let y = 1
    let b
    if (a > 0) {
        for (let i = 0; i < a - 2; i++) {
            b = x + y
            x = y
            y = b
        }
        console.log(b)
    }
    else (
        console.log("Please enter posotive number!!!")
    )
}

function Task2_6() {
    enterValue2()
    let x
    let y
    if (a > b) {
        x = a
        y = b
    }
    else if (a < b) {
        x = b
        y = a
    }
    else (
        console.log(x)
    )
    let r
    let m
    do {

        r = x - (Math.floor(x / y)) * y
        x = y
        m = y
        y = r
    }
    while (r !== 0)
    console.log(m)

}

function Task2_7() {
    enterValue1()
    let x = a.toString().length
    let m = 0
    let y = a

    for (let i = 0; i < x; i++) {
        m = m * 10 + y % 10
        y = (y - y % 10) / 10
    }
    console.log(`Entered number:${a}\nResult:${m}`)

}

function Task2_8() {
    enterValue2()
    let m = a
    let x
    let n
    let check;
    for (let i = 0; i < a.toString().length; i++) {
        n = m % 10
        m = (m - m % 10) / 10
        let y = b
        let count = 0
        do {
            x = y % 10
            y = (y - y % 10) / 10
            count++;

        }
        while (x != n && count < b.toString().length)
        if (x == n) {
            check = true;;
            console.log(a + "\n" + b + "\n" + "true")
            break;
        }

    }
    if (check != true) {
        console.log(a + "\n" + b + "\n" + "False")
    }
}

//Task1_1()
//Task1_2()
//Task1_3()
//Task1_4()
//Task1_5()
//Task1_6()
//Task1_7()

//Task2_1()
//Task2_2()
//Task2_3()
//Task2_4()
//Task2_5()
//Task2_6()
//Task2_7()
//Task2_8()








