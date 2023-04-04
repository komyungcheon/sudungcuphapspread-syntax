// function replace(array, from, to, elements) {
//     array.splice(from,to-from,...elements)
// }
// let testArray = [1, 2, 100, 100, 6]
// replace(testArray, 2, 4, [3, 4, 5])
// console.log(testArray)

// function copyReplace(array, from, to, elements) {
//     return array.slice(0, from).concat(elements).concat(array.slice(to))
//
// }
// console.log(copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]))
//
//
// let customerOrder = []
// function copyReplace(array, from, to, elements) {
//     const newArray = [...array]
//     newArray.splice(from, to - from + 1, ...elements);
//     return newArray;
// }
//
// console.log(copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]))

// let customerOrder = []
// function recordOrders(time) {
//     customerOrder.push({time, birds: Array.prototype.slice.call(arguments, 1)})
// }
// recordOrders(new Date, "coffee", "yaourt", "pizza")
// console.log(customerOrder)

// Dùng spread operator
let customerOrder = []
const recordOrders = (time, ...bird) => {
    customerOrder.push({time, bird});
};
recordOrders(new Date, "coffee", "yaourt", "pizza")
console.log(customerOrder);