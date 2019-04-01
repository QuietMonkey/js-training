'use strict'

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 *
 * @notions Primitive and Operators, Functions, While
 */

// Your code :

// function multiply(x, y){
//     let result = 0
//     if (x>0 && y>0){
//         for (let i=0; i< y; i++){
//             result += x
//         } 
//     } else if (x<0 && y<0){
//         x = -x
//         y = -y
//         for (let i=0; i< y; i++){
//             result += x
//         } 
//     } else if (x>0 && y<0){
//         y= -y
//         for (let i =0; i<y; i++){
//             result += x
            
            
//         }
//     }else if(x<0 && y>0) {
//         x= +x
//         for (let i =0; i<y; i++){
//             result += x
            
//         }

//     }else if (x === 0 || y ===0){
//         result = 0
//     }
//     return result
// }

function multiply(x, y){
    let result = 0
    let v = Math.abs(x)
    let w = Math.abs(y)
    
    for (let i =0; i<w; i++){
        result += v
    }
    
    if (x < 0 && y > 0){
        result = -result
    }else if (x > 0 && y < 0){
        result = -result
    }


    return result
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
