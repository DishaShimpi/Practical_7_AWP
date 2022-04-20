// Create a Hello World Nodejs Application
console.log("Hello World");
// Create an Http Server which will respond with message "Welcome to theWorld of Nodejs" to the client.
// Create an Http Server which will respond with current date and time to the client.
const http = require("http");
const server = http.createServer((req, res) => {
if (req.url === "/") {
res.write("Welcome to the World of Nodejs");
res.end();
} else if (req.url === "/date") {
const d = Date();
res.write(d.toString());
res.end();
}
});
server.listen(3000);
console.log("listening on port 3000...");