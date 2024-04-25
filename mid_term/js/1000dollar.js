const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question("찾을 상품은 > ? ", function(obj){
    let bas = {
        [obj] : "1000원",
    }
    console.log(bas[obj]);

    rl.close();
});

let id = "inhwa";
let pw = "1111";

let user = {
    id,
    pw,
}

console.log(user.id);
console.log(user.pw);