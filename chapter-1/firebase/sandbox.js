const list = document.querySelector('ul');
const form = document.querySelector('form');

const listRecipe = (recipe, id) => {
    let createDate = recipe.created_at.toDate();
    // console.log(createDate);
    let html = `
        <li data-id="${id}">
            <div>${recipe.title} </div>
            <div>${createDate}</div>
            <button class="btn btn-sm btn-danger my-2">delete</button>
        </li>
    `;

    list.innerHTML += html;
}


db.collection('recipes').get().then((snapshot) => {
    // console.log(snapshot.docs[0].data());
    snapshot.docs.forEach(doc => {
        // console.log(doc.data());
        listRecipe(doc.data(), doc.id);
    })
}).catch(err => console.log(err));


//delete recipe

const deleteRecipe = (id) => {
        const recipes = document.querySelectorAll('li');
        recipes.forEach(recipe => {
            if (recipe.getAttribute('data-id') === id) {
                recipe.remove();
            }
        })
    }
    //get docs

db.collection('recipes').onSnapshot(snapshot => {
    // console.log(snapshot.docChanges())
    snapshot.docChanges().forEach(change => {
        // console.log(change)
        const doc = change.doc;
        // console.log(doc)
        if (change.type === 'added') {
            listRecipe(doc.data(), doc.id);
        } else if (change.type === 'removed') {
            deleteRecipe(doc.id);
        }
    })
});

// add document to firebase firestore
form.addEventListener('submit', event => {
    event.preventDefault();

    const now = new Date();
    const recipe = {
        title: form.recipe.value,
        created_at: firebase.firestore.Timestamp.fromDate(now),
    };
    db.collection('recipes').add(recipe).then(() => {
        console.log('recipe added');
    }).catch((err) => {
        console.log(err);
    })
});

// deleting data

list.addEventListener('click', e => {
    // console.log(e);

    if (e.target.tagName === 'BUTTON') {
        const id = e.target.parentElement.getAttribute('data-id');
        // console.log(id);
        db.collection('recipes').doc(id).delete().then(() => {
            console.log(`Recipe Deleted`);
        }).catch((err) => {
            console.log(err)
        });
    }
});