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
            document.querySelector(".navItem-container").classList.toggle("show");
            var h=window.getComputedStyle(header,null).getPropertyValue("height");   
            main.style.marginTop=h;
        })
        
        
        
        