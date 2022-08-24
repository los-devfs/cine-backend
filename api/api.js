import express from "express";
import movieRoutes from "./routes/movieRoutes.js";

const api = express();
api.use(express.json());

//TODO: registrar middlewares y rutas

api.get("/status", (_, res) => {
  retun;
});

api.use("/movie", movieRoutes);

export default api;
