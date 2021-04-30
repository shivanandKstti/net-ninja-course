// const userOne = {
//     username: 'shiva',
//     email: 'shiva@gmail.com',
//     login() {
//         console.log('the user logged in');
//     },
//     logout() {
//         console.log('user logged out');
//     }
// }

// console.log(userOne.email);
// userOne.logout()

class User {
    constructor(usernmae, email) {
        this.username = usernmae;
        this.email = email;
    }

    login() {
        console.log(`${this.username} just logged in`)
    }
    logout() {
        console.log(`${this.username} logged out`);
    }
}

class Admin extends User {
    deleteUser(user) {
        users = users.filter(u => u.username !== user.username);
    }
}
const userOne = new User('shia', 'shia@gmail.com');
const userTwo = new User('shica', 'shiva@gmail.com');
const userThree = new Admin("admin", 'ad@g.com');
console.log(userOne, userTwo, userThree);
// userOne.login();
// userOne.logout();
// userTwo.login();
// userTwo.logout();
let users = [userOne, userTwo, userThree];
console.log(users);
userThree.deleteUser(userTwo);
console.log(users);