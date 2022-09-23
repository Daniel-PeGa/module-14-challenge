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
        username: "Micheal Litoris",
        email: "mikelitoris@hotmail.com",
        password: "Pa55word3"
    },
    {
        username: "Willwo Rkforcok",
        email: "willie@gmail.com",
        password: "Pa55word4"
    },
    {
        username: "Ana Cox",
        email: "anitaCox@gmail.com",
        password: "Pa55word5"
    },
]

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;