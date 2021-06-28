
import fn1 from './fn.js'
import fn2 from './fn2.js'

let button= document.querySelector('button')
button.onclick = fn1
console.log("index");


// async function getData(){
//     let res =await fetch('/api/getData')
//     console.log(res);
//     let data = await res.text()
//     console.log(data);
// }

// getData()

console.log(module.hot);

if(module.hot){
    module.hot.accept('./fn.js',function(){
        console.log('fn更新了');
        button.onclick=fn1
    })
    module.hot.accept('./fn2.js',function(){
        console.log('fn2更新了');
        //button.onclick=fn2
    })
}