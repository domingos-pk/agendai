import express from "express";
import cors from "cors";
import { prisma } from "./config/prisma.js"; // Caminho correto
import { ENV } from "./config/env.js"; // Caminho correto
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = ENV.PORT;

app.use(cors());
app.use(express.json());

// Rotas
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.json({ 
    status: "success",
    message: "Servidor rodando com Prisma!",
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});

// Graceful shutdown para o Prisma
process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(0);
});