const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");

const sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
    entries, 
    sectionOneObserver
) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            header.classList.add("nav-scrolled");
        } else {
            header.classList.remove("nav-scrolled");
        }
    })
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne); 



console.log('Hello world')


$('#myDropdown').on('show.bs.dropdown', function () {
    // do something...
})

const btn=document.getElementById("btn");

btn.addEventListener("click", function(){
   alert("You clicked me");
})