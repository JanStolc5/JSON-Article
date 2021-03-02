// ARTICLES DETAILS SCRIPT
const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.container');
// const imgSrc = src['https://source.unsplash.com/collection/888146/320x220'];

const artDetails = async () => {
    
    const res = await fetch('http://localhost:3000/articles/'+id);
    const article = await res.json();
    console.log(article);

    const template2 = `
    <img src="https://source.unsplash.com/collection/888146/600x400">
    <h1>${article.title}</h1><br>
    <p>${article.body}</p>

    `;
    container.innerHTML = template2;

}





window.addEventListener('DOMContentLoaded', () => artDetails ());