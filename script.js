console.log("sdjkfls");
let data="";
async function datat(){
   data= await fetch("http://localhost:3000/findone");
   console.log(data)
}

console.log(datat())