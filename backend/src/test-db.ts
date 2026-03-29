import { prisma } from "./config/prisma.js";

async function testConnection() {
    try {
        // Testar conexão ao banco de dados
        await prisma.$connect();
        console.log("✅ Conexão com o banco de dados bem-sucedida!");

        // Buscar usuários
        const users = await prisma.user.findMany();
        console.log("📊Usuários encontrados:", users);
    } catch (error) {
        console.error("❌ Erro ao conectar ou buscar dados:", error);
    } finally {
        await prisma.$disconnect();
    }
}

testConnection();