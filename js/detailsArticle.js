// ARTICLES DETAILS SCRIPT
const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.container');
const deleteBtn = document.querySelector('.delete-btn');


const artDetails = async () => {
    
    const res = await fetch('http://localhost:3000/articles/'+id);
    const article = await res.json();
    

    const template2 = `
    <img src="${article.img}">
    <h1>${article.title}</h1><br>
    <p>${article.body}</p>
    
    

    `;
    container.innerHTML = template2;

};



deleteBtn.addEventListener('click', function deleteFuction (el) {
    
    const res = fetch('http://localhost:3000/articles/'+id, {
        method: 'DELETE'
    });

    window.location.replace('index.html');
    
});


window.addEventListener('DOMContentLoaded', () => artDetails ());
