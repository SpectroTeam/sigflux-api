import { Server } from "http";
import app from "./app";
import { closePrismaConnection, dbHealthCheck } from "./lib/prisma";
import { AddressInfo } from "net";

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

let server: Server;

async function gracefulShutdown(server: Server): Promise<void> {
    try {
        await closePrismaConnection();
        console.info("Closed database connection!");

        if (server) {
            server.close();
        }

        process.exit();
    } catch (error) {
        console.info((error as Error).message);
        process.exit(1);
    }
}

async function init() {
    try {
        // verifica conexão com o banco de dados
        await dbHealthCheck();
        console.log("Connected to the database!");
        // inicia o servidor e loga a url de acesso
        server = app.listen(PORT, () => {
            const address = server.address() as AddressInfo;
            const host = address.address === '::' ? 'localhost' : address.address;
            const port = address.port;
            console.log(`App running on http://${host}:${port}`);
        });
    } catch (error) {
        console.error(error);
        gracefulShutdown(server);
    }
}

// captura sinais de termino do processo e tenta finalizar de forma bacana
["SIGINT", "SIGTERM", "uncaughtException", "unhandledRejection"].forEach((signal: string) => {
    process.on(signal, async () => {
        await gracefulShutdown(server);
    });
});

init();
