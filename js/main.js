let allTabs = document.querySelectorAll('.Features .three-tabs span');
let theImg = document.querySelector('.Features .simple-bookmarking .first-image img');
let theHeading = document.querySelector('.simple-bookmarking .content .custom-h2');
let theParagraph = document.querySelector('.simple-bookmarking .content .custom-p');
let arrowImgs = document.querySelectorAll('.Questions .questions div.top-content img');
let textQuestion = document.querySelectorAll('.Questions .questions div.top-content span');
let navbarIcon = document.querySelector('.navbar .links img');
let pageLogo = document.querySelector('.navbar .logo img');
let navbarLinks = document.querySelector('.navbar .links');

allTabs.forEach((tab)=> {
    tab.addEventListener("click", (e)=>{
        e.target.parentElement.querySelectorAll('span.active').forEach( (childActive)=>{
            childActive.classList.remove('active');
        })
        e.target.classList.add('active');
        theImg.src = `./images/illustration-features-tab-${e.target.dataset.number}.svg`;
        if (e.target.textContent.split(" ").includes('Searching')){
            theHeading.textContent = 'Intelligent search';
            theParagraph.textContent = 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
        }
        if(e.target.textContent.split(" ").includes('Sharing')){
            theHeading.textContent = 'Share your bookmarks';
            theParagraph.textContent = 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
        }
        if(e.target.textContent.split(" ").includes('Bookmarking')){
            theHeading.textContent = 'Bookmark in one Click';
            theParagraph.textContent = 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
        }
    });
});

arrowImgs.forEach( (img) => {
    img.addEventListener('click', (e) => {
        e.target.classList.toggle('active')
        e.target.parentElement.nextElementSibling.classList.toggle('show');
        e.target.parentElement.nextElementSibling.classList.add('faded-out');
        requestAnimationFrame(() => {
            e.target.parentElement.nextElementSibling.classList.remove("faded-out")
        });
    });
});
textQuestion.forEach( (text) => {
    text.addEventListener('click', (e) => {
        e.target.nextElementSibling.classList.toggle('active');
        e.target.parentElement.nextElementSibling.classList.toggle('show');
        e.target.parentElement.nextElementSibling.classList.add('faded-out');
        requestAnimationFrame(() => {
            e.target.parentElement.nextElementSibling.classList.remove("faded-out")
        });
    });
});

navbarIcon.addEventListener("click" , () => {
    if (navbarIcon.src.split("/").includes('icon-hamburger.svg')){
        pageLogo.classList.toggle('overlayed');
        navbarIcon.src = './images/icon-close.svg'


        let overlay = document.createElement("div");
        overlay.className = 'popup-overlay';
        overlay.classList.add('faded-out');
        requestAnimationFrame(() => {
            overlay.classList.remove("faded-out")
        });
        document.body.prepend(overlay);
        overlay.appendChild(document.querySelector('.navbar'));
        document.querySelector('.first-section').style.marginTop = '100px';
        document.body.style.overflowY = 'hidden';

        let mainContent = document.createElement("div");
        mainContent.className = 'main-content';
        mainContent.appendChild(document.querySelector('.navbar .links ul'));
        overlay.appendChild(mainContent);

        let socialLinksDiv = document.createElement("div");
        socialLinksDiv.className = 'social-links';

        let facebookImg = document.createElement("img");
        let twitterImg = document.createElement("img");
        facebookImg.src = './images/icon-facebook.svg';
        twitterImg.src = './images/icon-twitter.svg';
        socialLinksDiv.appendChild(facebookImg);
        socialLinksDiv.appendChild(twitterImg);

        overlay.appendChild(socialLinksDiv);
    }
       else if (navbarIcon.src.split("/").includes('icon-close.svg')) {
        let overlay = document.querySelector('.popup-overlay');
        document.body.prepend(document.querySelector('.navbar'));
        navbarLinks.append(document.querySelector('.popup-overlay .main-content ul'));
        document.querySelector('.first-section').style.marginTop = '0px';
        overlay.remove();
        navbarIcon.src = './images/icon-hamburger.svg';
        pageLogo.classList.remove('overlayed');
        document.body.style.overflowY = 'unset';
    };
});

 
window.onresize = () => {
    if (window.outerWidth >= 1400) {
        if (document.body.contains(document.querySelector('.popup-overlay'))) {
            document.body.prepend(document.querySelector('.navbar'));
            navbarLinks.append(document.querySelector('.popup-overlay .main-content ul'));
            document.querySelector('.first-section').style.marginTop = '0px';
            document.querySelector('.popup-overlay').remove();
            navbarIcon.src = './images/icon-hamburger.svg';
            pageLogo.classList.remove('overlayed');
            document.body.style.overflowY = 'unset  ';
        }else{
            return false;
        };
    };
};