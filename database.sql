CREATE DATABASE auth_database;

$ psql -U postgres -d auth_database
Password for user postgres:
psql (12.4)
WARNING: Console code page (437) differs from Windows code page (1252)
         8-bit characters might not work correctly. See psql reference
         page "Notes for Windows users" for details.
Type "help" for help.

auth_database=# create extension if not exists "uuid-ossp";
CREATE EXTENSION
auth_database=#

-- set extention
CREATE TABLE users (
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
  );

-- insert fake users
INSERT INTO users (user_name, user_email, user_password)
  VALUES ('test', 'test@test.com', 'kksdfsfds');




