export default {
    client: 'pg',
    connection: {
        host: process.env.PG_HOST || 'localhost',
        port: process.env.PG_PORT || 5432,
        user: process.env.PG_USER || 'ash',
        password: process.env.PG_PASSWORD || 'paleta',
        database: process.env.PG_DB || 'pokedex'
    },
    migrations: {
        directory: './migrations'
    },
};