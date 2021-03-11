const menuSections = document.querySelectorAll('.menu-section');
const menuTabs = document.querySelectorAll('.menu-tab');
const searchInput = document.querySelector('#search');
const incBtn = document.querySelector('.inc-btn');
const decBtn = document.querySelector('.dec-btn');
const pageNr = document.querySelector('.page-nr');
let incPage = 1;

// TABS TOGLER

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

const getPosts = async (term) => {

    let url = `http://localhost:3000/articles?_sort=id&_order=desc&_page=${incPage}&_limit=7`;
     console.log(url)
    if(term) {
        url += `&q=${term}`;
    };
    
    pageNr.innerText = `${incPage}`

    const res = await fetch(url);
    const articles = await res.json();

    if (Object.keys(articles).length  === 2 || Object.keys(articles).length <= 1) {
        incBtn.disabled = true;
    } else if (Object.keys(articles).length > 0 || Object.keys(articles).length >= 1) {
        incBtn.disabled = false;
    };
  
    let template = ''; //dopytac o to czemu pusty string??
    articles.forEach(el => {
        template += `
        <div class ="box">
        <img src="${el.img}">
            <h2>${el.title}</h2>
            <p>${el.body.slice(0, 200)}</p>
            <a href ="moredetails.html?id=${el.id}">read more...</a>
        </div>
        `
    });
    contentArticles.innerHTML = template;
};

// PAGE COUNTER

const paginatedInc = () => {
    incPage++;
    getPosts()  
};

const paginatedDec = () => {
    if (incPage < 1) {
        decBtn.disabled = true;

    } else if (incPage > 1){  
        decBtn.disabled = false;
        incPage--;
    };

    console.log(incPage);
    getPosts()
};

incBtn.addEventListener('click', paginatedInc);
decBtn.addEventListener('click', paginatedDec);

// SEARCH INPUT 
searchInput.addEventListener('keyup', searchFunction = (e) => {

    if(e.keyCode === 13) {
        getPosts(searchInput.value.trim());     
    };
});

window.addEventListener('DOMContentLoaded', () => getPosts ());

















