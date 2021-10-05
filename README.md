# twelve-test

## Prerequisites
```
postgres server running locally
node
npm
```
## Install postgresql locally
#### MacOS via Homebrew
```
brew services update 
brew services doctor
brew install postgresql
brew services start postgresql
brew services list (check that server is running)
```
#### Windows via PostgreSQL installer
```
https://www.postgresqltutorial.com/install-postgresql/
```
## Run Locally
#### Clone repo
```
mkdir twelve
cd twelve
git clone https://github.com/wdmcculloch/twelve-test.git
```

#### In /config directory change config.example.js to config.js 
```
const clientConfig = {
  host: "localhost",
  database: "emissions",
  port: 'FILL_ME_IN',
}
```
#### Get port postgres is running on locally
##### Open postgres db shell
```
psql postgres 
```
##### get connection info
```
\conninfo
```
#### Update port in clientConfig

#### Create and Seed Database
```
cd twelve-test
bash ./db/db.sh
```
#### Install Dependencies
```
npm install
```
#### Transpile front end and start server
```
npm run build
npm start
```
#### Navigate to localhost:3000 in the browser
