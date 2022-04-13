    var header=document.querySelector("header");
    var main=document.querySelector("main");  
    
    var h=window.getComputedStyle(header,null).getPropertyValue("height");
    window.addEventListener("load", function(){
        var h=window.getComputedStyle(header,null).getPropertyValue("height");   
        main.style.marginTop=h;
    })
    window.addEventListener("resize", function(){
        var h=window.getComputedStyle(header,null).getPropertyValue("height");   
        main.style.marginTop=h;
    })    

    document.querySelector(".hamburger").addEventListener("click", function(){
            document.querySelector(".navItem-container").classList.toggle("flex");

            var h=window.getComputedStyle(header,null).getPropertyValue("height");
            var bars=document.querySelector(".hamburger .fa-bars");
            var times=document.querySelector(".hamburger .fa-times");
            main.style.marginTop=h;
            
            bars.classList.toggle("none");
            if(window.getComputedStyle(bars).display=="none"){
               times.style.display="block" 
            } else {
                times.style.display="none";
            }
        })
