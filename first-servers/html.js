const http = require("http");

const host = 'localhost';
const port = 8000;

const items = JSON.stringify([
    { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
    { title: "The Prophet", author: "Kahlil Gibran", year: 1923 },
    { title: "Alone", author: "Kyu Chan", year: 1923 },
    { title: "Alibey", author: "Michael Jordan", year: 1923 }
]);

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/items":
            res.writeHead(200);
            res.end(items);
            break
        default:
            res.writeHead(404);
            res.end(JSON.stringify({error:"Resource not found"}));
    }
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});