const { connectDB } = require("./config/db.config");
const express = require("express");
const cors = require("cors");
// import AuthRoutes from "./routes/auth.routes";
// import userRoutes from "./routes/user.routes";
// import qrRoutes from "./routes/qr.routes";
const jobRoutes = require("./routes/job.routes")

const app = express();
const port = 5000;
app.use(cors());

app.use(express.json());

app.use("/api/jobs/", jobRoutes);
// app.use("/api/auth", AuthRoutes);
// app.use("/api/user", userRoutes);
// app.use("/api/qr/", qrRoutes);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

connectDB();
