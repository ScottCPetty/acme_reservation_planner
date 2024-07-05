const pg = require("pg");
const client = new pg.Client(
  process.env.DATABASE_URL || "postgres://localhost/acme_reservation_planner"
);
const uuid = require("uuid");

const createTables = async () => {};
const createCustomer = async () => {};
const createRestaurant = async () => {};
const fetchCustomers = async () => {};
const fetchRestaurants = async () => {};
const createReservation = async () => {};
const destroyReservation = async () => {};

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
