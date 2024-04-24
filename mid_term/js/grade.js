const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question('점수를 입력하세요 : ',function(score){
    switch(Math.round(score/10-1)){
        case 10:
        case 9:
            console.log("A");
            break;
        case 8:
            console.log("B");
            break;
        case 7:
            console.log("C");
            break;
        case 6:
            console.log("D");
            break;
        case 5:
        case 4:
        case 3:
        case 2:
        case 1:
        case 0:
            console.log("D");
            break;
        default:
            console.log("out");
            break;
    }
    rl.close();
});