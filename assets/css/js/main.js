// SHOW MENU

const showMenu = (toggleId, navId) => {
      const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId)
  
      if(toggle && nav){
            toggle.addEventListener('click', () =>{
                  nav.classList.toggle('show')
            });
      }
  }
  
  showMenu('nav_toggle','nav_menu')
  
  // ACTIVE & REMOVE ACTIVE
  const navLink = document.querySelectorAll('.nav_link')
  navLink.forEach(n => n.classList.remove('active'))
  
  function linkAction(){
      navLink.forEach(n => n.classList.remove('active'))
      this.classList.add('active')
  
      const navMenu = document.getElementById('nav_menu')
      navMenu.classList.remove('show')
  }
  
  navLink.forEach(n => n.addEventListener('click', linkAction))
  
  const btn = document.getElementById('button');
  
  document.getElementById('form')
   .addEventListener('submit', function(event) {
     event.preventDefault();
  
     btn.value = 'Sending...';
  
     const serviceID = 'default_service';
     const templateID = 'template_b26u19h';
  
     emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Email';
        alert('Sent!');
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
  });