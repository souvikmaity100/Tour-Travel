let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}


document.querySelectorAll('.about .vodeo-container .controls .control-btn').forEach(btn =>{
    btn.onclick = ()=>{
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .vodeo-container .video').src = src;
    }
})