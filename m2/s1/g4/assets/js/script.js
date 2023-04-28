const nav = document.querySelector('div');
window.addEventListener('scroll', () =>{
    if(window.scrollY >= 450){
        nav.classList.add('changeColor');
    }else{
        nav.classList.remove('changeColor');
    }
})