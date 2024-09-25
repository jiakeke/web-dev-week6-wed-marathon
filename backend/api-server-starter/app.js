require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const userRouter = require("./routes/userRouter");
const jobRouter = require("./routes/jobRouter");
const {
  unknownEndpoint,
  errorHandler,
} = require("./middleware/customMiddleware");
const connectDB = require("./config/db");
const cors = require("cors");
const requireAuth = require("./middleware/requireAuth");

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

connectDB();

// Use the userRouter for all /users routes
app.use("/api/users", userRouter);

// Use Auth
app.use(requireAuth);

// Use the jobRouter for all /jobs routes
app.use("/api/jobs", jobRouter);

app.use(unknownEndpoint);
app.use(errorHandler);

const port = process.env.PORT || 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
