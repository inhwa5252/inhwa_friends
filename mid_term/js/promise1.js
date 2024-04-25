/**< var pro1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('success');
    },1000);
});
pro1.then(function(result){
    console.log('result',result);
})**/

/** 위에 코드와 아래 코드는 동일의미 **/

function pro1(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('success1');
        },1000);
    });
}
function pro2(){
    return new Promise (function(resolve,reject){
        setTimeout(function(){
            resolve('success2');
        },1000);
    });
}
pro1().then(function(result){
    console.log('result',result);

    pro2().then(function(result){
        console.log('result',result);
    })

})
