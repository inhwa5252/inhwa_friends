console.log("===초기 배열 데이터===");
var arr = ["java" , "C++" , "python"];
for(var i =0; i<3; i++){
    console.log(arr[i]);
}
console.log("===배열에 데이터 추가===");

arr.push('ASP.net');
arr.push('C#.net');
console.log();
console.log("===배열의 출력===");

console.log('배열의 길이 : '+arr.length);
for(var i =0; i<arr.length; i++){
    console.log(arr[i]);
}