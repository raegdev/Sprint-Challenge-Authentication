const db = require('../database/dbConfig');

module.exports = {
    find,
    add,
    findById,
    findByUsername
}

function find() {
    return db('users').select('id', 'username');
};

function add(user) {
    return db('users').insert(user)
};

function findById(id) {
    return db('users')
    .where({ id })
    .first();
};

function findByUsername(username) {
    return db('users')
    .where({ username })
    .first();
};