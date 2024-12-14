const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const db = require('./database'); 

const app = express();
const port = 555;

app.use(cors());
app.use(express.json());


app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).send('All fields are required');
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const query = `INSERT INTO USER (NAME, EMAIL, PASSWORD) VALUES (?, ?, ?)`;
    db.run(query, [name, email, hashedPassword], function (err) {
        if (err) {
            console.error(err.message);
            res.status(500).send('Error signing up user');
        } else {
            res.status(201).json({ id: this.lastID, name, email });
        }
    });
});


app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send('Both fields are required');
    }

    const query = 'SELECT * FROM USER WHERE EMAIL = ?';
    db.get(query, [email], (err, row) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Error logging in');
        } else if (!row) {
            res.status(404).send('User not found');
        } else {
            const isPasswordValid = bcrypt.compareSync(password, row.PASSWORD);
            if (isPasswordValid) {
                res.json({ id: row.ID, name: row.NAME, email: row.EMAIL });
            } else {
                res.status(401).send('Invalid credentials');
            }
        }
    });
});


app.get('/cars', (req, res) => {
    const query = 'SELECT * FROM CAR WHERE QUANTITY > 0';
    db.all(query, [], (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Error retrieving cars');
        } else {
            res.json(rows);
        }
    });
});


app.post('/checkout', (req, res) => {
    const { userId, cartItems, downPayment } = req.body;

    if (!userId || !cartItems || downPayment <= 0) {
        return res.status(400).send('Invalid input data.');
    }

    const insertPromises = cartItems.map((item) => {
        return new Promise((resolve, reject) => {
            const query = `
                INSERT INTO RESERVATIONS (USER_ID, CAR_ID, DOWN_PAYMENT)
                VALUES (?, ?, ?)
            `;
            db.run(query, [userId, item.id, downPayment], (err) => {
                if (err) {
                    console.error(err.message);
                    reject('Error reserving car.');
                } else {
                    resolve();
                }
            });
        });
    });

    Promise.all(insertPromises)
        .then(() => {
            res.status(201).send('Checkout successful! Reservation complete.');
        })
        .catch((error) => {
            res.status(500).send(error);
        });
});

app.listen(port, () => {
    console.log(`Car dealership server running on http://localhost:${port}`);
});
