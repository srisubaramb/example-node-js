const http = require("http");
const fs = require("fs");
const path = require("path")
const dbConnection = require("./db");
let serversCollection;
const PORT = 3000
const app = http.createServer(async (req , res) => {
	const parsedUrl = new URL(req.url, "http://" + req.headers.host)
	if (req.method == "GET") {
		if (parsedUrl.pathname == "/health") {
			res.statusCode = 200;
			const filePath = path.join(__dirname , "data", "app.txt")
			fs.appendFileSync(filePath, "Visited\n")
			await serversCollection.updateOne(
				{"serverno" : 1}, 
				{$set : {"status" : "down"}}, 
				{"upsert":true})
			res.end("Server number "+ parsedUrl.searchParams.get("no") + " is healthy\n")
		}
		else {
			res.statusCode = 404
			res.end("Page not found")
		}
	} else {
		res.statusCode = 405
		res.end("Request is not allowed")
	}
})
async function startServer() {
	await dbConnection.connectDB()
	serversCollection = dbConnection.getServerCollection()
	app.listen(PORT)
	console.log("App listening at port: " + PORT)
}
startServer()
