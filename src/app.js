const express = require("express");

const recipeRoutes = require("./routes/recipes");
const requestLogger = require("./middleware/requestLogger");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());
app.use(requestLogger);

app.get("/", (req, res) => {
  res.json({ message: "Recipe API is running" });
});

app.use("/api/recipes", recipeRoutes);

app.use((req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  next(error);
});

app.use(errorHandler);

module.exports = app;
