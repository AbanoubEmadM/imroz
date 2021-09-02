$(function(){
    $(window).scroll(function(){
        //navbar scroll
        var sc = $(window).scrollTop();
        if (sc > 100){
            $(".bg-light").addClass("white");
            $(".navbar-light .navbar-nav .nav-item").css("color","#1F1F25");
            $(".navbar-brand .dark").css("display","block");
            $(".navbar-brand .white").css("display","none")
        }
        else{
            $(".bg-light").removeClass("white");
            $(".navbar-light .navbar-nav .nav-item").css("color","#fff");
            $(".navbar-brand .dark").css("display","none")
            $(".navbar-brand .white").css("display","block")
        }
        //sections fadein
        // $(".hide").each(function(){
        //     console.log(sc);
        //     if(sc > $(this).data("scroll")){
        //         $(this).fadeIn(1000);
        //     }
        // })
    });
    $(".navbar-light li a").click(function(){
        $(this).addClass("active");
        $(".navbar-light li").children().removeClass("active")
    })
})
//number animations
var number = document.querySelectorAll(".company .company-box h4");
var i = 0;
    number.forEach(h4 => {
        var numberInt = setInterval(function(){
            data = 0;
            data =  h4.dataset.number;
            h4.textContent = i;
            if (i > data - 1){
                clearInterval(numberInt);
            }
        i++
    },60);
})  
// handle active on navbar li 
var navLi = document.querySelectorAll(".navbar-light .nav-item");

navLi.forEach(li => {
    li.addEventListener("click",(e)=> {
        e.target.parentElement.querySelectorAll(".active").forEach(element=>{
            element.classList.remove("active");
        });
        e.target.classList.add("active");
        $(".navbar-light .nav-item").css("color","#000")
        $(".navbar-light .nav-item.active").css("color","#fd4766")
       var o = document.getElementById(e.target.dataset.section); 
        o.scrollIntoView({
            behavior:"smooth"
        })
    })
})
// handle active on images
var ourImgs = document.querySelectorAll(".testimonials img");

ourImgs.forEach(img => {
    img.addEventListener("click",(e)=> {
        e.target.parentElement.querySelectorAll(".active").forEach(element=>{
            element.classList.remove("active");
        });
        e.target.classList.add("active");
        var imgData = e.target.dataset.first;
        $(".testimonials .text-part").filter(`#${imgData}`).show().siblings().hide()
    });
});

var ourSpans = document.querySelectorAll(".controls span");

// handle images
var ourImgs = document.querySelectorAll(".news-box");

ourSpans.forEach(span => {
span.addEventListener("click",(e)=> {
    e.target.parentElement.querySelectorAll(".active").forEach(element=>{
        element.classList.remove("active");
    });
    e.target.classList.add("active");
    var spanD = e.target.dataset.span;
    $(".news-box").hide().filter(`#${spanD}`).fadeIn(500);
    $(".news-box.active:last").addClass("active");
    // $(".news-box.active:eq(5)").addClass("active");

});
});
