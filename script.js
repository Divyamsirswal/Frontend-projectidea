var cr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    cr.style.left = dets.x+"px"
    cr.style.top = dets.y+"px"
    blur.style.left = dets.x-250+"px"
    blur.style.top = dets.y-250+"px"
})

gsap.to("#nav",{
    backgroundColor:"#000",
    height:"90px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:.8
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -30%",
        end:"top -80%",
        scrub:1
    }
})

