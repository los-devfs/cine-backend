import express from "express";
import filmRoutes from "./routes/filmRoutes.js";

const api = express();

//TODO: registrar middlewares y rutas

api.get("/status", (_, res) => {
  retun;
});

api.use("/books", filmRoutes);

export default api;
