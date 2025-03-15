console.log("andrul")

const sidebar = document.querySelector('.sidebar');
const ham = document.querySelector('.ham');
const cross = document.querySelector('.cross');
const hamburger = document.querySelector('.hamburger');

cross.style.display = 'none';

hamburger.addEventListener('click',()=>{

    sidebar.classList.toggle('sidebarGo');
    if(sidebar.classList.contains('sidebarGo')){
        ham.style.display = 'inline'; 
        cross.style.display = 'none'; 
    }
    else{
        ham.style.display = 'none';
        setTimeout(()=>{
            cross.style.display = 'inline'; 
        },300) 
    }

})
