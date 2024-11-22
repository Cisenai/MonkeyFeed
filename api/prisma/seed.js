const { PrismaClient } = require('@prisma/client');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const prisma = new PrismaClient().$extends({
    query: {
        user: {
            $allOperations({ operation, args, query }) {
                if (['create', 'update'].includes(operation) && args['data']['password']) {
                    args['data']['password'] = bcrypt.hashSync(args['data']['password'], saltRounds);
                }
                return query(args);
            }
        }
    }
});

const clients = require('./data/clients.json');
const subscriptions = require('./data/subscriptions.json');
const providers = require('./data/provider.json');
const news = require('./data/news.json');

async function main() {
    for (const u of clients) {
        try {
            await prisma.user.create({
                data: u,
            });
            console.log(`Created User`);
        } catch (e) {
            console.log(`Failed to create User: ${u.name}`);
        }
    }
    for (const s of subscriptions) {
        await prisma.subscription.create({
            data: s,
        });
        console.log(`Created Subscription`);
    }
    for (const p of providers) {
        try {
            await prisma.provider.create({
                data: p,
            });
            console.log(`Created Provider`);
        } catch (e) {
            console.log(`Failed to create Provider: ${p.name}`);
        }
    }
    for (const n of news) {
        try {
            await prisma.new.create({
                data: n,
            });
            console.log(`Created News`);
        } catch (e) {
            console.log(e);
            console.log(`Failed to create News: ${n.name}`);
        }
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
