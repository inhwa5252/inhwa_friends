let dic = {
    boy :"b",
    girl : 'g',
    friend : "f"
};

console.log(dic.boy);
dic.apple = "a";
dic.ten = "10";

console.log(dic.ten);

const unit ={
    attack : function(weapon){
        return `${weapon}으로 공격한다`;
    }
}
console.log(unit.attack("주먹"));

console.log(dic['friend']);
