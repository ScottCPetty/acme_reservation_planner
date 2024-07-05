const pg = require("pg");
const client = new pg.Client(
  process.env.DATABASE_URL || "postgres://localhost/acme_reservation_planner"
);
const uuid = require("uuid");

const createTables = async () => {
  const SQL = ``;
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
