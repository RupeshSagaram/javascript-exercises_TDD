const fibonacci = function(n) {

    let fib = [1,1];
    if(n ==0){
        return 0;
    } else if(n<0){
        return 'OOPS';
    }
    else{
    for(let i= 2; i<=n; i++){ 
    fib.push(fib[i-1]+fib[i-2]);
    };
    return fib[n-1];
}
};

// Do not edit below this line
module.exports = fibonacci;
