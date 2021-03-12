// ARTICLES DETAILS SCRIPT
const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.container');
const deleteBtn = document.querySelector('.delete-btn');
const editBtn = document.querySelector('.edit-btn');


// CREATE ARTICLE DETAILS
const artDetails = async () => {
    
    const res = await fetch('http://localhost:3000/articles/'+id);
    const article = await res.json();
    
    deleteBtn.style.display= 'block';
    editBtn.style.display= 'block';

    const template2 = `
    <img src="${article.img}">
    <h1>${article.title}</h1><br>
    <p>${article.body}</p>`;

    container.innerHTML = template2;
};

// DELETE ARTICLES
const deleteFuction = async (el) => {

    const res = await fetch('http://localhost:3000/articles/'+id, {
        method: 'DELETE'
    });
    
    window.location.replace('index.html');
};

const alertFunction = () => {

    if (confirm('Are you sure you want to delete this article?')) {
        deleteFuction();
    } else {
        false
    };
};

// EDIT ARTICLES 
const editChangeLocation = async (el) => {
 
    let url = 'http://localhost:3000/articles/'+id;
    const res = await fetch(url);
    const articles = await res.json();

    window.location.replace(`edit.html?id=${articles.id}`);
};    

deleteBtn.addEventListener('click', alertFunction);
editBtn.addEventListener('click', editChangeLocation);
window.addEventListener('DOMContentLoaded', () => artDetails ());
