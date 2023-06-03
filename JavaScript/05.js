// const color = ["green", "red", "yellow", "blue", "white"]

// console.log(color)

// const index = color.indexOf("green")
// console.log(index)

// const search = color.find(element => element === "black")
// console.log(search);

// const boob = color.findIndex(element => element === "yellow")
// console.log(boob);

// const number = [10, 20, 30, 40, 50]

// console.log(`number = ${number}`)

// const result = number.map(e => e * e)
// console.log(`Array Map = ${result}`);

// const data = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

// console.log(data)

// const result = dataB.map((e, i) => {
//   return `The day ${i + 1}, weather = ${e}`
// })

// console.log(result)


const Cart = [
  { name: "bag", price: 500 },
  { name: "book", price: 100 },
  { name: "camera", price: 900 }
]

const NewCart = Cart.reduce((value, e) => e.price + value, 0)

console.log(`${NewCart}`);