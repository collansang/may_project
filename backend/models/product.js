const db = require('../config/db');

class Product {
    static create(user_id, name, description, price, category, image_url) {
        return new Promise((resolve, reject) => {
            const sql = 'INSERT INTO Products (user_id, name, description, price, category, image_url) VALUES (?, ?, ?, ?, ?, ?)';
            db.query(sql, [user_id, name, description, price, category, image_url], (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    }

    static findAll() {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM Products';
            db.query(sql, (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
        });
    }
}

module.exports = Product;