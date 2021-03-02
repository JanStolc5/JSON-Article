const menuSections = document.querySelectorAll('.menu-section');
const menuTabs = document.querySelectorAll('.menu-tab');
const btntest = document.querySelector('.btntest')






const showInfo = id => {
    
    const clasDelate = document.getElementById('third-tab');
    menuSections.forEach(section => {
        section.style.display = 'none'
    });

    menuTabs.forEach(tab => {
        tab.classList.remove('menu-tab-active');
    });

    
    document.getElementById(id).style.display = 'block';
    // clasDelate.style.width = '82vw';
    

    const currentActiveButton = document.querySelector(`[data-id=${id}]`);
    currentActiveButton.classList.add('menu-tab-active');
    
};

// GET POSTS FROM JSON


const contentArticles = document.querySelector('.content-article');

const getPosts = async () => {

    

    let uri = 'http://localhost:3000/articles';
    console.log(uri);
    
    const res = await fetch(uri);
    const articles = await res.json();
    

    let template = '';
    articles.forEach(el => {
        template += `
        <div class ="box">
        <img src="https://source.unsplash.com/collection/888146/320x220">
            <h2>${el.title}</h2>
            <p>${el.body.slice(0, 200)}</p>
            <a href ="moredetails.html?id=${el.id}">read more...</a>
        </div>`
        
    });

    contentArticles.innerHTML = template;

}

window.addEventListener('DOMContentLoaded', () => getPosts ());


















