const hamburger = document.getElementById('hamburger');
const navmenu = document.getElementById('nav-menu');
const closeicon = document.getElementById('nav-close');
const navlink = document.querySelectorAll('.nav__link');

navlink.forEach(link => 
    link.addEventListener('click',()=>{
        navmenu.classList.add('hidden')
    })
)
closeicon.addEventListener('click',() =>{
    navmenu.classList.add('hidden')
})

hamburger.addEventListener('click',()=>{
   navmenu.classList.remove('hidden');
})
//   tabs 
  const tabs = document.querySelectorAll(".tabs_wrap ul li");
  const all = document.querySelectorAll('.item_wrap');
  const foods = document.querySelectorAll('.food');
  const snacks = document.querySelectorAll('.snack');
  const beverages = document.querySelectorAll('.beverage');
  

  tabs.forEach(tab=>{
    tab.addEventListener('click',()=>{
        tabs.forEach(tab=>{
            tab.classList.remove("active")
        })
        tab.classList.add('active')


        const tabval = tab.getAttribute('data-tabs') 
        
        all.forEach(item =>{
            item.style.display ='none'
        })

        if(tabval == 'tamato'){
            foods.forEach(item =>{
                item.style.display ='block'
            })
        }
        else if(tabval == 'snack'){
            snacks.forEach(item =>{
                item.style.display ='block'
            })
        }

        else if(tabval == 'beverage'){
            beverages.forEach(item =>{
                item.style.display ='block'
            })
        }
        else{
            all.forEach(item =>{
                item.style.display ='block'
            })
        }
    })
  })

//   show scroll up 
const scrollup = () => {

    const scrollupbtn = document.getElementById('scroll-up');
    
    if(this.scrollY >= 250){
        scrollupbtn.classList.remove('-bottom-1/2');
        scrollupbtn.classList.add('bottom-4');
    }
    else{
        scrollupbtn.classList.add('-bottom-1/2');
        scrollupbtn.classList.remove('bottom-4');
    }
}


window.addEventListener('scroll',scrollup);

// change background heaer 

const scrollheader = () => {

    const header = document.getElementById('header');
    
    if(this.scrollY >= 250){
        header.classList.add('border-b','border-secondaryColor');
        
    }
    else{
        header.classList.remove('border-b','border-secondaryColor');
       
    }
}


window.addEventListener('scroll',scrollheader);
 

// Dark light theme 

const html = document.querySelector('html');
const themebtn = document.getElementById('theme-toggle');

if(localStorage.getItem('mode')=='dark'){
   darkmode();
}
else{
    darkmode();
}

themebtn.addEventListener('click',(e) =>{
    if(localStorage.getItem('mode')=='light'){
        darkmode();
    }
    else{
        darkmode();
    }


} )

function darkmode(){
    html.classList.add('dark');
    themebtn.classList.replace('ri-moon-line','ri-sun-line')
    localStorage.setItem('mode','dark');
}

function lightmode(){
    html.classList.remove('dark');
    themebtn.classList.replace('ri-sun-line','ri-moon-line')
    localStorage.setItem('mode','light');
}

// scroll selections active link 
const activelink = () =>{
    const sections = document.querySelectorAll('section');
    const navlinks = document.querySelectorAll('.nav__link')

    let current ='home';

    sections.forEach(section=>{
        const sectiontop = section.offsetTop;

        if(this.scrollY >= sectiontop-60){
            current = section.getAttribute('id')
        }
    })

    navlinks.forEach(item=>{
        item.classList.remove('text-secondaryColor');
        if(item.href.includes(current)){
            item.classList.add('text-secondaryColor');
        }
    })
};

window.addEventListener('scroll', activelink)




// scroll reveal animation 

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})

sr.reveal('.home__image');
sr.reveal('.home__content',{origin: 'bottom'});

sr.reveal('.category__card',{interval:300})

sr.reveal('.promo__card-1',{origin: 'left'});
sr.reveal('.promo__card-2',{origin: 'right'});

sr.reveal('.about__img',{origin: 'bottom'});
sr.reveal('.about__content',{origin: 'top'});

sr.reveal('.menu__items',{origin: 'left'});

sr.reveal('.customer__review',{origin: 'right'});

sr.reveal('.footer');




