// //! count number of occurance
// let a=[3,70,2,1,70,3,6,70,60];

// console.log(a);


// let occurence={}
// let count=0;

// for(let i=0; i<a.length;i++)
// {
//     if (occurence[a[i]]) {
//         occurence[a[i]]=occurence[a[i]] + 1;
//         count++
//     }
//     else
//     {
//         occurence[a[i]]=1
//     }
    
// }

// console.log(occurence);


let obj = {
    a: {
    b: {
    c: 5,
    d: 6,
    e: 7,
    },
    f: 8,
    g: {
    h: 9,
    },
    },
    i: 10,
    j: 11,
    }

console.log(obj);
let o1=Object.keys(obj.a);
let o2=Object.keys(obj.a.b);
let o3=Object.keys(obj.a.g);
let o4=Object.keys(obj);

console.log(o4,o1,o2,o3);



