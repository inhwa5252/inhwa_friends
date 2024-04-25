var dan = 2;
outside : while(dan < 10){
    var num = 1;
    while (num < 10){
        if(dan == 6 && num ==1){
            break outside;
        }
        console.log(dan + " X " + num + " = " + dan*num);
        num++;
    }
    console.log("\n");
    dan++;
}