class ChatsUI {
    constructor(chatList) {
        this.chatList = chatList;
    }

    render(data) {
        // console.log(data.message);
        const when = dateFns.distaceInWordsToNow()
        const html = `
            <li class="list-group-item">
            <span class="username">${data.username}</span>
            <span class="message">${data.message}</span>
            <div class="time">${data.created_at.toDate()}</div>
            </li>
        `;
        // console.log(html)

        this.chatList.innerHTML += html;
    }
}