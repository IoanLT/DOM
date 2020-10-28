// Grabing the first paragraph
// const para = document.querySelector('p');
// console.log(para);

// Grabbing the element with the class .error
// const para = document.querySelector('.error');
// console.log(para);

// Grabbing the div with the class .error
// const para = document.querySelector('body > div:nth-child(2) > p:nth-child(1)');
// console.log(para);

// Grabbing all the p elements
// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAll('.error');


// paras.forEach(para => {
//     console.log(para);
// })
// console.log(errors);

// Get and element by ID
// const title = document.getElementById('page-title');
// console.log(title);

// Get an element by their class name
// const errors = document.getElementsByClassName('error');
// console.log(errors);

// Get elements by their tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);



// const para = document.querySelector('p');
// para.innerText = 'ninjas are awesome!';
// console.log(para.innerText);

// Changing the text on several elements
// const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' adding some new text';
// });
// console.log(paras);

// const content = document.querySelector('.content');
// console.log(content.innerHTML);
// content.innerHTML += '<h2> This is a new heading</h2>';


// const people = ['mario', 'luigi', 'nelu'];
// people.forEach(person => {
//     content.innerHTML += `<p>${person}`;
// })


// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.thenetninja.co.uk');
// link.innerText = 'The Net Ninja website';

// const msg = document.querySelector('p');
// console.log(msg.getAttribute('class'));
// msg.setAttribute('class', 'success');
// console.log(msg);

// Adding a new attribute using the setAttribute method
// msg.setAttribute('style', 'color: green');


// Adding and removing classes
// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     if(para.innerText.includes('error')){
//         para.classList.add('error');
//     }
//     if(para.innerText.includes('success')){
//         para.classList.add('success');
//     }
// })
// console.log(paras);

// const title = document.querySelector('.page-title');
// title.classList.toggle('test');


// Parent child elements

// const article = document.querySelector('article');

// console.log(article.children);
// Array.from(article.children).forEach(child => {
//     child.classList.add('article-element');
// });

// const title = document.querySelector('h2');

// console.log(title.parentElement.parentElement);
// console.log(title.nextElementSibling);
// console.log(title.previousElementSibling);


// Click Events

const button = document.querySelector('button');

button.addEventListener('click', () => {
    console.log('you clicked me');
});

const items = document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click', event => {
        // console.log('item clicked');
        // console.log(event.target);
        event.target.style.textDecoration = 'line-through';
    })
})




























































