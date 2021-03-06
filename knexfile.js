// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: "localhost",
      user: "vladimir",
      password: "123",
      database: "cjs-web-store"
    },
  },
  test: {
    client: 'pg',
    connection: {
      host: "localhost",
      user: "vladimir",
      password: "123",
      database: "test-cjs-web-store"
    },
  },
  production: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false
      }
    }
  }
};
