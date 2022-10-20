const { User } = require('../models');

const userData = [
    {
        username: "Ben Dover (1)",
        email: "bendover@gmail.com",
        password: "Pa55word1"
    },
    {
        username: "Candice Dickens (2)",
        email: "candiceD@gmail.com",
        password: "Pa55word2"
    },
    {
        username: "Micheal Litoris (3)",
        email: "mikelitoris@hotmail.com",
        password: "Pa55word3"
    },
    {
        username: "Willwo Rkforcok (4)",
        email: "willie@gmail.com",
        password: "Pa55word4"
    },
    {
        username: "Ana Cox (5)",
        email: "anitaCox@gmail.com",
        password: "Pa55word5"
    },
]

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;