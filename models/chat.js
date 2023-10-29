const { db } = require("./config");

const usersDb = db.collection("chats");

async function saveChat(userJson) {
    const response = await usersDb.doc(id).set(userJson);
}