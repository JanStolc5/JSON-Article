const form = document.querySelector('form');
const alertTxt = document.querySelector('.alertTxt');

// CREATE POST
const createPost = async (e) => {

        const cont = {
        title: form.title.value,
        body: form.body.value,
        img: form.img.value
    };
    
    await fetch('http://localhost:3000/articles', {

        method: 'POST',
        headers: {

                'Content-Type': 'application/json',
              },

        body: JSON.stringify(cont),
    });

    form.title.value = '';
    form.body.value = ''  
};

// COMPLETE ALL FIELDS FUNCTION
const alertFunction = (e) => {
    e.preventDefault();
    
    if (form.title.value == '' || form.img.value == '' || form.body.value == '') {
        alertTxt.innerText = "Please complete all fields";
    } else {
        createPost();
    };
};

form.addEventListener('submit', alertFunction);

