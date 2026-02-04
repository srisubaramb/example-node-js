const http = require("http");
const fs = require("fs")
const PORT = 3000
const app = http.createServer((req , res) => {
	const parsedUrl = new URL(req.url, "http://" + req.headers.host)
	console.log(parsedUrl)
	if (req.method == "GET") {
		if (parsedUrl.pathname == "/health") {
			res.statusCode = 200;
			fs.appendFileSync("/app/data/app.txt", "Visited\n")
			res.end("Server number "+ parsedUrl.searchParams.get("no") + " is healthy")
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
app.listen(PORT)
console.log("App listening at port: " + PORT)
