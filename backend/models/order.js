const db = require('../config/db');

class Order {
    static create(product_id, user_id, quantity) {
        return new Promise((resolve, reject) => {
            const sql = 'INSERT INTO Orders (product_id, user_id, quantity) VALUES (?, ?, ?)';
            db.query(sql, [product_id, user_id, quantity], (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    }
}

module.exports = Order;