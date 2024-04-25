const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output :process.stdout,
});

let dic = {
    boy : "he",
    girl : "she",
    dog : "it"
}

for(let info in dic){
    console.log(`${info} : ${dic[info]}`);
}
rl.question("찾을 단어 : ", function(word){
    let key = word;
    console.log(dic[key]);

    rl.close();
});
