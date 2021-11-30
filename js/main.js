const navSlider=()=>{
    const burger=document.querySelector(".burger");
    const nav=document.querySelector(".nav_links");
    const navLinks=document.querySelectorAll(".nav_links li");


burger.addEventListener('click',()=>{

    // nav Animation 
    nav.classList.toggle("nav-active");

    //navlinks
    navLinks.forEach((link,index)=>{
        
        if(link.style.animation){
            link.style.animation="";
        }else{
            link.style.animation=`animation 0.5s ease forwards ${index/7+.2}s`;
        }

    })

    //burger animation
    burger.classList.toggle("toggle");

})

}
navSlider();
