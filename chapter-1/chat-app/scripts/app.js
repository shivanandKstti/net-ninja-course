const chatList = document.querySelector('.chat-list');
console.log(chatList);

// class instances
const chatsUI = new ChatsUI(chatList);
const chatroom = new Chatroom('gaming', 'shiva');
// console.log(chatroom)
// chatroom.addChats('Hello every one')
//     .then(() => {
//         console.log(`char added`);
//     }).catch((err) => {
//         console.log(err);
//     })


chatroom.getChats((data) => {
    // console.log(data)
    chatsUI.render(data);
});