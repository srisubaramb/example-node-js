const {MongoClient} = require('mongodb')

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri)
let db;
async function connectDB() {
	try{
	await client.connect()
	db = client.db("node-simple")
	console.log("DB connected")
	}catch(e) {
		console.log("can't able to connect" + e)
	}
}
function getDB() {
	return db;
}
function getServerCollection(){
	return db.collection("servers")
}
module.exports = {
	connectDB, getDB, getServerCollection
};
