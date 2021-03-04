// ARTICLES DETAILS SCRIPT
const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.container');
const deleteBtn = document.querySelector('.delete-btn');



const artDetails = async () => {
    
    const res = await fetch('http://localhost:3000/articles/'+id);
    const article = await res.json();
    
    deleteBtn.style.display= 'block';
    
    const template2 = `
    <img src="${article.img}">
    <h1>${article.title}</h1><br>
    <p>${article.body}</p>

    `;
    container.innerHTML = template2;

};



const deleteFuction = async (el) => {

    

    const res = await fetch('http://localhost:3000/articles/'+id, {
        method: 'DELETE'
    });
    
    window.location.replace('index.html');
};


const alertFunction = () => {

    if (confirm('Czy jestesś pewien!?')) {
        deleteFuction();
    } else {
        false
    };
};





deleteBtn.addEventListener('click', alertFunction);

window.addEventListener('DOMContentLoaded', () => artDetails ());
