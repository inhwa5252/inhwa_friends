const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question('단축키를 입력하세요 : ',function(hotkey){
    switch(parseInt(hotkey)){
        case 1:
            console.log("mom");
            break;
        case 2:
            console.log("dad");
            break;
        case 3:
            console.log("son");
            break;
        default :
            console.log("no define");
            break;
    }
});