window.addEventListener('load',()=>{
    const preload = document.querySelector ('.preload');
    preload.classList.add("preload-finish");
})

burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightnav = document.querySelector('.rightnav')



burger.addEventListener('click', ()=>{
    rightnav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');

    
})