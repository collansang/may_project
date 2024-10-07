const db = require('../config/db');

class ForumPost {
    static create(user_id, title, content) {
        return new Promise((resolve, reject) => {
            const sql = 'INSERT INTO ForumPosts (user_id, title, content) VALUES (?, ?, ?)';
            db.query(sql, [user_id, title, content], (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    }

    static findAll() {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM ForumPosts';
            db.query(sql, (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
        });
    }
}

module.exports = ForumPost;