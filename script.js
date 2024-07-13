var main =document.querySelector("#main")
var cursor=document.querySelector(".cursor")
 var images=document.querySelector("#images")

main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.6,
        // ease:"back.out"                      
    })
})
images.addEventListener("mouseenter",function() {
    cursor.innerHTML = "view more"
   gsap.to(cursor,{
    scale:2,
    backgroundColor: "#ffffff8a",
   })

})
images.addEventListener("mouseleave",function() {
    cursor.innerHTML = ""
    gsap.to(cursor,{
     scale:1,
     backgroundColor: "#fff",
    })
 
 })
 

















