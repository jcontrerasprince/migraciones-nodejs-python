CREATE EXTENSION IF NOT EXISTS dblink;

DO
$$
BEGIN
   IF NOT EXISTS (SELECT FROM pg_database WHERE datname = 'migrations_sequelize') THEN
      PERFORM dblink_exec('dbname=' || current_database(), 'CREATE DATABASE migrations_sequelize');
   END IF;

   IF NOT EXISTS (SELECT FROM pg_database WHERE datname = 'migrations_typeorm') THEN
      PERFORM dblink_exec('dbname=' || current_database(), 'CREATE DATABASE migrations_typeorm');
   END IF;

   IF NOT EXISTS (SELECT FROM pg_database WHERE datname = 'migrations_alembic') THEN
      PERFORM dblink_exec('dbname=' || current_database(), 'CREATE DATABASE migrations_alembic');
   END IF;
END
$$;
