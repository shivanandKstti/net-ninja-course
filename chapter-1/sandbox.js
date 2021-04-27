// console.log('message');
// console.log('message');

// let age = 44;
// let a = 2010;

// console.log(age, a);

// age = 30;
// console.log(age);

// const points = 33;
// console.log(points)
// points = 33;

/**
 * strings
 */

// strings

// console.log('hello world');
// let email = 'shiva@gmail.com';
// console.log(email);

// // string concatenation

// let firstName = 'shiva';
// let lastName = 'katti';

// let fullName = firstName + ' ' + lastName;
// console.log(fullName);
// console.log(fullName[0]);
// console.log(fullName.length);
// console.log(fullName.toUpperCase());
// console.log(fullName.toLowerCase());
// // console.log(fullName);
// let index = email.indexOf('@');
// console.log(index);

// let email = 'shiva@gmail.com';

// let result = email.lastIndexOf('g');
// let result = email.slice(0, 5);
// let result = email.substr(4, 10);
// let result = email.replace('s', 'ss');
// console.log(result);

// let ninjas = [
//     'one',
//     'two',
//     'three'
// ];

// console.log(ninjas);
// console.log(ninjas[1]);

// let ages = [23, 25, 30, 35];
// console.log(ages);
// console.log(ages[2]);
// console.log(ages.length);

// let result = ninjas.join(',');
// let result = ninjas.indexOf('three');
// let result = ninjas.concat(['items', 'four']);
// let result = ninjas.push('value');
// let result = ninjas.pop();
// console.log(ninjas);

// // let age;
// let age = null;

// console.log(age, age + 3, `the age is ${age}`)

// const calcArea = function(radius) {
//     // let area = 3.24 * radius ** 2;
//     // return area;
//     return 3.24 * radius ** 2;
//     // console.log(area);
// }

// const area = calcArea(5);
// console.log(area);


// const calcArea = (radius) => { 
//     return 3.14 * radius ** 2;
// }

// const calcArea = radius => {
//     return 3.14 * radius ** 2;
// }

// const calcArea = (radius) => 3.14 * radius ** 2;
// const area = calcArea(10);
// console.log(area);

// const blogs = [
//     { title: 'blog one', likes: 20 }, { title: 'blog two', likes: 30 }
// ]
// let user = {
//     name: 'shiva',
//     age: 29,
//     email: 'shiva@gmail.com',
//     location: 'banglore',
//     blogs: [{ title: 'blog one', likes: 20 }, { title: 'blog two', likes: 30 }],
//     login: function() {
//         console.log('user logged in');
//     },
//     logblogs: function() {
//         // console.log(blogs);
//         this.blogs.forEach(blog => {
//             console.log(blog.title, blog.likes);
//         })
//     }
// };

// console.log(user);
// console.log(user.name);

// user.age = 30;
// console.log(user.age);

// user.login();
// user.logblogs();

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);
// const area = 7.7;
// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// const random = Math.random();
// console.log(random);

// console.log(Math.round(random * 100))

// const paragraph = document.querySelector('p');
// const paragraph = document.querySelector('body > h1');
// console.log(paragraph);

// const paras = document.querySelectorAll('p');
// console.log(paras);

// const title = document.getElementById('page-title');
// console.log(title)

// const para = document.querySelector('p');
// // console.log(para.innerText);
// // para.innerText += ' learing js'

// const paras = document.querySelectorAll('p');
// paras.forEach((para) => {
//     console.log(para.outerText);
//     para.innerText += ' new text';
// })

// const content = document.querySelector('.content');
// // console.log(content.innerHTML)
// content.innerHTML += `<h2>This is new H2</h2>`

// const para = document.querySelector('p');
// console.log(para.classList)
// para.classList.add('error');
// para.classList.remove('error');
// para.classList.add('success');

// const paras = document.querySelectorAll('p');
// paras.forEach(p => {
//     if (p.textContent.includes('error')) {
//         p.classList.add('error')
//     } else if (p.textContent.includes('success')) {
//         p.classList.add('success');
//     }
// })

// const article = document.querySelector('article');

// console.log(article.children);
// console.log(Array.from(article.children));
// Array.from(article.children).forEach((child) => {
//     child.classList.add('article-element');
// });

// const title = document.querySelector('h2');

// console.log(title.parentElement.parentElement)
// console.log(title.nextElementSibling)
// console.log(title.previousElementSibling)
// console.log(title.previousElementSibling)

// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//     console.log(`you clicked`);
// })
// const button = document.querySelector('button');
// const ul = document.querySelector('ul');

// button.addEventListener('click', () => {
//     // ul.innerHTML += `<li>New todo</li>`
//     const li = document.createElement('li');
//     li.textContent = 'New todo';
//     ul.append(li);
// });
// ul.remove();
// const items = document.querySelectorAll('li');
// items.forEach(item => {
//     item.addEventListener('click', (event) => {
//         // console.log('item  clicked');
//         // console.log(event);
//         // console.log(event.target)
//         // console.log(item)
//         // event.target.style.textDecoration = 'line-through';
//         event.target.remove()
//     })
// })

// ul.addEventListener('click', (event) => {
//     // console.log(event.target)
//     if (event.target.tagName === 'LI') {
//         event.target.remove();
//     }
// })

// const copy = document.querySelector('.copy-me');
// copy.addEventListener('copy', () => {
//     console.log(`oi! my content is copyright`)
// });

// const box = document.querySelector('.box');
// box.addEventListener('mousemove', event => {
//     // console.log(event)
//     // console.log(event.offsetX, event.offsetY)
//     box.textContent = `x pos is - ${event.offsetX} y pos is - ${event.offsetY}`;
// });

// document.addEventListener('wheel', event => {
//     console.log(event);
// })

const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;
// const username = document.getElementById('username');
// const username = document.querySelector('#username');
form.addEventListener('submit', event => {
    // console.log('message');
    event.preventDefault();
    // console.log(username.value);
    // console.log(form.username.value)
    let username = form.username.value;

    if (usernamePattern.test(username)) {
        feedback.textContent = 'username is valid';
    } else {
        feedback.textContent = 'username must contain letters only between 6 and 12 characters';
    }

});

form.username.addEventListener('keyup', e => {
    if (usernamePattern.test(e.target.value)) {
        // console.log('passed');
        form.username.setAttribute('class', 'success');
    } else {
        form.username.setAttribute('class', 'error');
        // console.log('failed')
    }
});

// const username = 'shiva34233';
// const pattern = /^[a-z]{6,}$/;
// let result = pattern.test(username);
// console.log(result)

// if (result) {
//     console.log(`regex test passed`);
// } else {
//     console.log(`regex test failed`);
// }

// let result = username.search(pattern);