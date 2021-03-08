
const form = document.querySelector('form');





const createPost = async (e) => {
    e.preventDefault();
    
    

    const cont = {
        title: form.title.value,
        body: form.body.value,
        img: form.img.value
    };
    
    await fetch('http://localhost:3000/articles/', {

        method: 'POST',

        headers: {

                'Content-Type': 'application/json', //o co chodzi???????//
              },

        body: JSON.stringify(cont),
    });

    form.title.value = '';
    form.body.value = ''
        
};


form.addEventListener('submit', createPost);
















// const data = { username: 'example' };

// fetch('http://localhost:3000/articles', {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json', //o co chodzi???????//
//   },
//   body: JSON.stringify(data),
// })





// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });sdfasdf