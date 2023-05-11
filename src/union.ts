// union means or

let balance: string|number;
balance=12;
balance='12';
// by using union we can accept multiple data type


// this function will receive string or parameter as number and return string or number value. however we have to declare undefined as well
function getBalance(param: string|number): string|number| undefined {
    if (typeof param=='string'){
        return param
    }
    else if (typeof param=='number'){
        return param
    }
    else{
        `${param} is undefined`
    }
}

console.log(getBalance(17))
console.log(getBalance('seventeen'))
console.log(getBalance('undefined'))