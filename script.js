const addNums1 = (...numbers) => {
    return numbers.reduce((prev, current) => prev + current)
}

console.log(addNums1(2, 4, 6, 8))

let numArray = [2, 5, 7, 8, 9]

const addNums2 = (a, b, c, d) => {
    return (a + b + c + d)
}

console.log(addNums2(...numArray))