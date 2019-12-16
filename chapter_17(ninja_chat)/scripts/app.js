// DOM queries
const chatList = document.querySelector('.chat-list');

// class instances
const chatUI = new ChatUI(chatlist);
const chatroom = new Chatroom('general', 'shaun');

// get the chat render
chatroom.getChats(data => {
    console.log(data);
});