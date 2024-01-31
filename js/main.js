//0
let arr = [1,2,3,4,5]
let newArr = []
for(let i = 0; i<arr.length; i++){
    let result = 0
    for(let k = 0; k<=i; k++){
    result = result+arr[k]
    }
    newArr.push(result)
}
console.log(newArr);
//1
let arr1 = [2,10,5,8,12]
let newArr1 = []
for(let i = 0; i<arr1.length; i++){
    let result = 0
    for(let k = 0; k<=i; k++){
       result = result+arr1[k]
    }
    newArr1.push(result)
}
console.log(newArr1);

//3
let arr2 = [9,14,3,2,1]
let newArr2 = []
for(let i = 0; i<arr2.length; i++){
    let result = 0
    for(let k = 0; k<=i; k++){
        result = result+arr2[k]
    }
    newArr2.push(result)
}
console.log(newArr2);