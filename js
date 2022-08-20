// document.write('hjhhfghkjhhg');
// document.getElementsByClassName('main-button').onclick=alert("njugujjkj");

// HIDING THE NAVBAR IN RESPONSIVE

let navBar=document.querySelectorAll('.nav-link');
let navcollapse=document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navcollapse.classList.remove("show");
})
})


// ACTIVE NAVBAR JS

let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20) {
        nav.classList.add("scoll-on");

    }else{
        nav.classList.remove("scroll-on");
    }
}

// // COUNTER INCREMENT JS

document.addEventListener("DOMContentLoaded", () => {
    function counter(id,start,end,duration){
        let obj = document.getElementById(id),
        current = start,
        range = end-start,
        increment = end > start ? 1:-1,
        step = Math.abs(Math.floor(duration/range)),
        timer=setInterval(() => {
            current+=increment;
            obj.textContent=current;
            if(current==end){
                clearInterval(timer);
            }
        },step);
    }
    counter("counter1",0,1200,300);
    counter("counter2",0,1200,300);
    counter("counter3",0,1200,300);
    counter("counter4",0,1200,300);
});
