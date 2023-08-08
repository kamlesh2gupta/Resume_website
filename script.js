/*for (let i = 1; i <=5; i++) {
   for (let j = 1; j <=i ; j++) {
      document.write(j + " ");
      
   }
   document.write("<br>");
}*/


   setInterval(()=>{
     var d= new Date().toLocaleTimeString();
     document.getElementById('demo').innerHTML = d;
   },1000)


function fun(){
let frm = document.getElementsByName('myForm')[0];
   frm.submit(); // Submit the form
   frm.reset();  // Reset all form data
   return false;
  
}


