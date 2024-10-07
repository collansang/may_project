const db = require('../config/db');

class User {
    static create(username, password, role) {
        return new Promise((resolve, reject) => {
            const sql = 'INSERT INTO Users (username, password, role) VALUES (?, ?, ?)';
            db.query(sql, [username, password, role], (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    }

    static findByUsername(username) {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM Users WHERE username = ?';
            db.query(sql, [username], (err, results) => {
                if (err) reject(err);
                resolve(results[0]);
            });
        });
    }
}

module.exports = User;