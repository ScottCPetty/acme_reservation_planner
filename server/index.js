const {
  client,
  createTables,
  createCustomer,
  createRestaurant,
  fetchCustomers,
  fetchRestaurants,
  createReservation,
  destroyReservation,
} = require("./db");

app.get("/api/customers", async (req, res, next) => {});
app.get("/api/restaurants", async (req, res, next) => {});
app.get("/api/reservations", async (req, res, next) => {});
app.post("/api/customers/:id/reservations", async (req, res, next) => {});
app.delete(
  "/api/customers/:customer_id/reservations/:id",
  async (req, res, next) => {}
);
app.use((error, req, res, next) => {
  res.status(error.status || 500).send({ error: error });
});

const init = async () => {
  await client.connect();
  console.log("connected to database");
  await createTables();
  console.log("created tables");
};
init();
