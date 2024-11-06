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

async function main() {
    for (const u of clients) {
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
