const toggler = document.querySelector('.toggler');
const navBar = document.querySelector('.nav-bar');

toggler.addEventListener('click' , function() {
    console.log('ayoub')
    navBar.classList.toggle('sticky');
})

document.addEventListener('scroll' , function() {
    if(scrollY > 20)
    {
        navBar.classList.add('active');
    }
    else
    {
        navBar.classList.remove('active');
    }
})



// email

