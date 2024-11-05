const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const clients = require('./data/clients.json');
const subscriptions = require('./data/subscriptions.json');

const bcrypt = require('bcrypt');
const saltRounds = 10;

async function main() {
    for (const u of clients) {
        const passwordHash = bcrypt.hash(u.password, saltRounds);
        u.password = (await passwordHash).toString();
        console.log(u.password);
        await prisma.user.create({
            data: u,
        });
        console.log(`Created User`);
    }
    for (const s of subscriptions) {
        await prisma.subscription.create({
            data: s,
        });
        console.log(`Created Subscription`);
    }
}

main()
    .then(async () => {
        await prisma.$disconnect;
        console.log('Seed completed');
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect;
        process.exit(1);
    });
