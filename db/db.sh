psql postgres -f ./db/etl/createdb.sql
psql emissions -f ./db/etl/schema.sql
psql emissions -f ./db/etl/seed.sql
