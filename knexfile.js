// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://postgres:docker@localhost:5432/sdisomething'
    //connection: {host: '127.0.0.1', port:5432, user:'postgres', password:'docker', database:'sdisomething'}
     // replace USER_NAME, USER_PASSWORD, and DATABASE_NAME with your Docker PostgreSQL container's username, password and an *empty* database
     // that you have created on your Docker PostgreSQL container volume
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'sdisomething',
      user:     'postgres',
      password: 'docker'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
