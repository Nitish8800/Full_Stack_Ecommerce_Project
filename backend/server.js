const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./db/Database.js");

// config
dotenv.config({
  path: "backend/config/.env",
});

// Connect Database
connectDatabase();

// create server
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost: ${process.env.PORT}`);
});
