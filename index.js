const x = 9
const y = 5
const z = 8
const w = 11

const simpleHash= (Data) => (Data % x) * 1000 + (Data % y) * 100 + (Data % z) * 10 + (Data % w)

console.log(simpleHash(7501))
console.log(simpleHash(2289))
console.log(simpleHash(6845))
console.log(simpleHash(8848))
console.log(simpleHash(6281))