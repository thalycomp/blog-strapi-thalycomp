/*module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'blog-strapi'),
        username: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', 'dockerstrapiblog'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});*/

const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(env("DATABASE_URL"));

  return {
    defaultConnection: "default",
    connections: {
      default: {
        connector: "bookshelf",
        settings: {
          client: "postgres",
          host,
          port,
          database,
          username: user,
          password,
          ssl: { rejectUnauthorized: false }
        },
        options: {
          ssl: false
        },
      },
    },
  };
};
