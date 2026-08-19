
let num = [5,8,2,6,1]


num[2] = 6
num.push(3)
console.log(`o vetor é ${num}`)
console.log(`o vetor tem ${num.length} posições`)
num.sort()
    console.log(num)



for(pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}


for(let pos in num) {
    console.log(num[pos]) 
}