# twelve-test

## Prerequisites
```
postgres server running locally (instructions below if needed)
node
npm
```
#### Install postgresql locally
#### MacOS via Homebrew
```
brew install postgresql
brew services start postgresql
brew services list (check that server is running)
```
#### Windows via PostgreSQL installer
```
https://www.postgresqltutorial.com/install-postgresql/
```
## Run Locally
#### Clone this repo and then fill in postgres port number in config/config.js
```
const clientConfig = {
  host: "localhost",
  database: "emissions",
  port: 'FILL_ME_IN',
}
```
#### Get port that postgres is running on locally (directions below to get postgres port)
##### Open postgres db shell
```
psql postgres 
```
##### get connection info
```
\conninfo
```
#### Create and Seed Database
```
cd twelve-test
bash ./db/db.sh
```
#### Install Dependencies
```
npm install
```
#### Build and Start
```
npm run build
npm start
```
#### Navigate to localhost:3000 in the browser
