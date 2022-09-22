const seedPosts = require('./post-seed');
const seedUsers = require('./user-seed');
const seedComments = require('./comment-seed');
const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n-- database synced --\n');

    await seedUsers();
    console.log('\n-- users seed --\n');

    await seedPosts();
    console.log('\n-- post seed --\n');

    await seedComments();
    console.log('\n-- comment seed --\n');

    process.exit(0);
};

seedAll();