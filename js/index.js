const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav bar

let navItems = document.querySelectorAll('a');

navItems[0].setAttribute('class', '.nav-item-1');
navItems[0].textContent = "Services";
navItems[1].setAttribute('class', 'nav-item-2');
navItems[1].textContent = "Product";
navItems[2].setAttribute('class', 'nav-item-3');
navItems[2].textContent = "Vision";
navItems[3].setAttribute('class', 'nav-item-4');
navItems[3].textContent = "Features";
navItems[4].setAttribute('class', 'nav-item-5');
navItems[4].textContent = "About";
navItems[5].setAttribute('class', 'nav-item-6');
navItems[5].textContent = "Contact";

// change of color for nav

navItems.forEach(link => link.style.color = 'green');


// cta

let header = document.querySelector('h1');
header.textContent = siteContent['cta']['h1'];

let button = document.querySelector('button');
button.textContent = "Get Started";

let ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);


// main content

let mainContent = document.querySelectorAll('.text-content');

mainContent[0].querySelector('h4').textContent = siteContent['main-content']['features-h4'];
mainContent[0].querySelector('p').textContent = siteContent['main-content']['features-content'];
mainContent[1].querySelector('h4').textContent = siteContent['main-content']['about-h4'];
mainContent[1].querySelector('p').textContent = siteContent['main-content']['about-content'];
mainContent[2].querySelector('h4').textContent = siteContent['main-content']['services-h4'];
mainContent[2].querySelector('p').textContent = siteContent['main-content']['services-content'];
mainContent[3].querySelector('h4').textContent = siteContent['main-content']['product-h4'];
mainContent[3].querySelector('p').textContent = siteContent['main-content']['product-content'];

let middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// contact

let contact = document.querySelector('.contact');

contact.getElementsByTagName('h4')[0].textContent = siteContent['contact']['contact-h4'];
contact.getElementsByTagName('p')[0].textContent = siteContent['contact']['address'];
contact.getElementsByTagName('p')[1].textContent = siteContent['contact']['phone'];
contact.getElementsByTagName('p')[2].textContent = siteContent['contact']['email'];

// footer

let footer = document.querySelector('footer');
footer.textContent = "Copyright Great Idea! 2018";

// two new nav items

let newNav1 = document.createElement('a');
newNav1.textContent = "Home";
newNav1.href = '#';
newNav1.style.color = 'green';

let ogNav1 = document.querySelector('nav');
ogNav1.prepend(newNav1);

let newNav2 = document.createElement('a');
newNav2.textContent = "ETC";
newNav2.href = '#';
newNav2.style.color = 'green';

let ogNav2 = document.querySelector('nav');
ogNav2.appendChild(newNav2);



