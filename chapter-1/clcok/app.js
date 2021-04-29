// const clock = document.querySelector('.clock');

// const tick = () => {
//     const now = new Date();
//     const h = now.getHours();
//     const m = now.getMinutes();
//     const s = now.getSeconds();
//     // console.log(h);

//     const html = `
//         <span>${h}</span> :
//         <span>${m}</span> :
//         <span>${s}</span>
//     `;

//     clock.innerHTML = html;
// };

// setInterval(tick, 1000);

// const now = new Date();
// // console.log(dateFns.isToday(now));
// console.log(dateFns.format(now, 'YYYY'))

// const getTodos = (callBacks) => {
//     const request = new XMLHttpRequest();
//     request.addEventListener('readystatechange', () => {
//         if (request.readyState === 4 && request.status === 200) {
//             callBacks(undefined, request.responseText);
//         } else if (request.readyState === 4) {
//             callBacks('cound not fetch data', undefined);
//         }
//     });
//     request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
//     request.send();
// };
// getTodos((err, data) => {
//     console.log(err, data);

// });

// fetch('shiva.json').then((response) => {
//     console.log('Resolved :', response);
//     return response.json();
// }).then(data => {
//     console.log(data)
// }).catch((err) => {
//     console.log('Rejected :', err);
// });

const getTodos = async() => {
    const respose = await fetch('shivaa.json');
    if (respose.status !== 200) {
        throw new Error('Cant fetch the data');
    }
    const data = await respose.json();
    return data;
};

getTodos()
    .then(data => console.log(data))
    .catch(err => console.log(err.message));