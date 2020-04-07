const users = [
    {
        id : "1",
        name : "Bright",
        email: "bright@example.com",
        age :26,
    },
    {
        id : "2",
        name : "Abbot",
        email: "abbot@example.com",

    },
    {
        id : "3",
        name : "Samuel",
        email: "samuel@example.com",
        age :29
    },
]
const posts = [
    {
        id : "1",
        title : "Post 1",
        body : "Post 1 Body",
        published : false,
        author : "1"
    },
    {
        id : "2",
        title : "Post 2",
        body : "Post 2 Body",
        published : true,
        author : "1"
    },
    {
        id : "3",
        title : "Post 3",
        body : "Post 3 Body",
        published : true,
        author : "2"
    },
]

const comments = [
    {
        id : "11",
        text : "This is the beginning of a new Dawn ",
        post : "2",
        author : "2"
    },
    {
        id:"22",
        text : "I am not afraid of the virus",
        post: "1",
        author : "2"
    },
    {
        id: "33",
        text : "Dream big as the ocean",
        post : "2",
        author : "1"
    }
]

const db = {
    users,
    posts,
    comments
}


export default db;
