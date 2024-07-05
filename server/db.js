const pg = require("pg");
const client = new pg.Client(
  process.env.DATABASE_URL || "postgres://localhost/acme_reservation_planner"
);
const uuid = require("uuid");

const createTables = async () => {
  const SQL = `
    DROP TABLE IF EXISTS reservations;
    DROP TABLE IF EXISTS customers;
    DROP TABLE IF EXISTS restaurants;
    CREATE TABLE customers(
      id UUID PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    );
    CREATE TABLE restaurants(
      id UUID PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    );
    CREATE TABLE reservations(
      id UUID PRIMARY KEY,
      date DATE NOT NULL,
      party_count INTEGER DEFAULT 2 NOT NULL,
      customer_id UUID REFERENCES customers(id) NOT NULL,
      restaurant_id UUID REFERENCES restaurants(id) NOT NULL
    );
  `;
  await client.query(SQL);
};
const createCustomer = async () => {
  const SQL = ``;
};
const createRestaurant = async () => {
  const SQL = ``;
};
const fetchCustomers = async () => {
  const SQL = ``;
};
const fetchRestaurants = async () => {
  const SQL = ``;
};
const createReservation = async () => {
  const SQL = ``;
};
const destroyReservation = async () => {
  const SQL = ``;
};

module.exports = {
  client,
  createTables,
  createCustomer,
  createRestaurant,
  fetchCustomers,
  fetchRestaurants,
  createReservation,
  destroyReservation,
};
