const color = ['red','green','blue'];
let [r,g,b] = color;

[r,g,b] = [b,g,r];

console.log(r);
console.log(g);
console.log(b);

const [k,q, ...rest] = ['C','C++','Java','python','react'];

console.log(k);
console.log(q);
console.log(rest.length);
for(var i =0;i <rest.length;i++){
    console.log(rest[i]);
}

