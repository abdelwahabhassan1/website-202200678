const sqlite3 = require('sqlite3').verbose();


const db = new sqlite3.Database('./car_dealership.db', (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to SQLite database.');
    }
});


const createUserTable = `
CREATE TABLE IF NOT EXISTS USER (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NAME TEXT NOT NULL,
    EMAIL TEXT UNIQUE NOT NULL,
    PASSWORD TEXT NOT NULL,
    IS_ADMIN INTEGER NOT NULL DEFAULT 0,
    CREATED_AT TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);`;

const createCarTable = `
CREATE TABLE IF NOT EXISTS CAR (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    MAKE TEXT NOT NULL,
    MODEL TEXT NOT NULL,
    YEAR INTEGER NOT NULL,
    PRICE REAL NOT NULL,
    QUANTITY INTEGER NOT NULL,
    DESCRIPTION TEXT DEFAULT NULL,
    IMAGE_URL TEXT DEFAULT NULL,
    CREATED_AT TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);`;

const createBookingTable = `
CREATE TABLE IF NOT EXISTS BOOKING (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    USER_ID INTEGER NOT NULL,
    CAR_ID INTEGER NOT NULL,
    QUANTITY INTEGER NOT NULL,
    TOTAL_AMOUNT REAL NOT NULL,
    STATUS TEXT NOT NULL DEFAULT 'Pending',
    BOOKED_AT TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (USER_ID) REFERENCES USER(ID),
    FOREIGN KEY (CAR_ID) REFERENCES CAR(ID)
);`;


db.serialize(() => {
    db.run(createUserTable);
    db.run(createCarTable);
    db.run(createBookingTable);
    console.log('Database tables created or verified.');
});

module.exports = db;
