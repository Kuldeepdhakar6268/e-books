// console.log("sdjkfls");
// let ulr="http://localhost:3000/alluser";
// let newdata;


// async function data(){
//    let newdata= await fetch(ulr);
//    newdata =await newdata.json();
//    return newdata
// }
 

// data().then(res=>{
//    console.log(res)
// })

   window.addEventListener("scroll",function(){
      if(window.scrollY>113){
         document.querySelector(".up-button").classList.remove("display1");
         console.log("content")
         }
        else{
            document.querySelector(".up-button").classList.add("display1");
            console.log("none")
            }
   })
// })

 
