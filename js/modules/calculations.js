

let sum = function(...args)
{
    var sum = 0;
    args.forEach( elem => sum += elem );

    return sum;
};


export {sum};