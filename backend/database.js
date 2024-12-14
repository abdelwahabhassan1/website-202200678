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

const createReservationTable = `
CREATE TABLE IF NOT EXISTS RESERVATIONS (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    USER_ID INTEGER NOT NULL,
    CAR_ID INTEGER NOT NULL,
    DOWN_PAYMENT REAL NOT NULL,
    CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (USER_ID) REFERENCES USER (ID),
    FOREIGN KEY (CAR_ID) REFERENCES CAR (ID)
);`;

const createTrigger = `
CREATE TRIGGER IF NOT EXISTS reduce_car_quantity
AFTER INSERT ON RESERVATIONS
BEGIN
    UPDATE CAR
    SET QUANTITY = QUANTITY - 1
    WHERE ID = NEW.CAR_ID;
END;`;

db.serialize(() => {
    db.run(createUserTable);
    db.run(createCarTable);
    db.run(createReservationTable);
    db.run(createTrigger);
    console.log('Database tables created or verified.');
});

module.exports = db;
