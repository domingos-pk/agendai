import express from "express";
import cors from "cors";
import { prisma } from "./config/prisma.js"; // Caminho correto
import { ENV } from "./config/env.js"; // Caminho correto

const app = express();
const PORT = ENV.PORT;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ 
    status: "success",
    message: "Servidor rodando com Prisma!",
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});