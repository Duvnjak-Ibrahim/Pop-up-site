document.getElementById("x").addEventListener("click",function(){
document.getElementById("pop-up").classList.add("pop-down")

})
let input1=document.getElementById("name")
let input2=document.getElementById("email")

 setTimeout(function(){
     document.getElementById("pop-up").classList.remove("pop-down")

 },1500)

 document.getElementById("decline").addEventListener("mouseenter",function(){
    document.getElementById("reverse-btn").classList.toggle("reverse")
 })
 
 document.getElementById("accept").addEventListener("click",function(){
    if(input1.value && input2.value){
        
    
     
    
         document.getElementById("pop-up").innerHTML=`
         <p class="loading">Loading ...</p>
         <p class="loading">Thank you for waiting</p>
         `
        
         setTimeout(function(){
             document.getElementById("pop-up").innerHTML=`
             <button id="x" class="x">x</button>
             <p class="loading red"><br><span class="big purple">Your</span><br>"Data has been stolen"</p>
             <p class="loading blue">"We are very thankfull for your data"</p>
             <p class="loading ">"You sold us your rights on everything u own"</p>
             <p class="joke">*I know how to make x button work,but i dont want to;hahahahaahah.
             <p class="joke">*There is x somewhere on this site, Find It</p>`

            //  document.getElementById("x").addEventListener("click",function(){
            //     document.getElementById("pop-up").classList.add("pop-down")
             
             },1500)
             
            }})

            document.getElementById("small-x").addEventListener("click",function(){
                document.getElementById("pop-up").classList.add("pop-down")
            })
        
        
        

            




