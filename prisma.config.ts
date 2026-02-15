// Example usage of PrismaClient
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Example query: find all users
async function main() {
    const users = await prisma.user.findMany();
    console.log(users);
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

export default prisma;
import { defineConfig } from "prisma/config"
import { url } from "zod";  


export default defineConfig({
    datasource: {
        url:process.env.DATABASE_URL,
        directURL:process.env.DIRECT_URL,
    },
});
