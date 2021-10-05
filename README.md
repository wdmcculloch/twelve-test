# twelve-test

## Prerequisites
```
postgres server running locally
node
npm
```
## Run Locally
#### Clone repo
```
mkdir twelve
cd twelve
git clone https://github.com/wdmcculloch/twelve-test.git
```

#### Create a config.js file in /config
```
const clientConfig = {
  host: "localhost",
  database: "emissions",
  port: 'port postgres is running on locally',
}
```

#### Create and Seed Database
```
cd twelve-test
bash ./db/db.sh
```
#### Install Dependencies and Start Server
```
npm install
npm start
```
