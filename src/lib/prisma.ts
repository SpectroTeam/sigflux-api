import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// verifica conexão com o banco de dados
export async function dbHealthCheck() {
  try {
    const result = (await prisma.$queryRaw`
      SELECT version() as version, 
             current_database() as database,
             current_user as user
    `) as string[];

    return {
      isHealthy: true,
      timestamp: new Date().toISOString(),
      message: result[0],
    };
  } catch (error: unknown) {
    let errMessage = "Unknown error";
    if (error instanceof Error) {
      errMessage = error.message;
    }

    throw new Error(`Database health check failed: ${errMessage}`);
  }
}

export async function closePrismaConnection() {
  await prisma.$disconnect();
}

export default prisma;
