// EDIT ARTICLE
(function () {
    const form = document.querySelector('form');
    const id = new URLSearchParams(window.location.search).get('id');
    // const loadBtn = document.querySelector('.load-btn');
    // const saveBtn = document.querySelector('.save-btn');    
    const inputPut = document.querySelector('#title-edit');
    const inputImg = document.querySelector('#img-edit');
    const inputBody = document.querySelector('#body-edit');
    const inputId = document.querySelector('#id-number');
    
    
    const editLoadContent = async () => {    
        const res = await fetch('http://localhost:3000/articles/'+id);
        const article = await res.json();
      
        inputId.value = `${article.id}`;
         inputPut.value = `${article.title}`;
         inputImg.value = `${article.img}`;
         inputBody.value = `${article.body}`;
         console.log(inputPut.value);    
        };
        
        // SAVE EDITED CONTENT FUNCTION
    const saveFunction = async (e) => {
        const saveCont = {  
            title: form.title.value,
            body: form.body.value,
            img: form.img.value   
        };

        e.preventDefault();
        
        await fetch(`http://localhost:3000/articles/`+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(saveCont)
        });
    
        window.location.replace('index.html');
    };
    
    
    
    
    
    form.addEventListener('submit', saveFunction);
    
    window.addEventListener('DOMContentLoaded', () => editLoadContent ());

    
})();









