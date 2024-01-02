const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const cors = require('cors');




const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(cors({
    origin: '*'
    }))

server.use (
    jsonServer.rewriter({
        "/*": "/$1",
    })
);

server.use(router);

server.listen(3000, () => {
    console.log("JSON Server is running");
})

module.exports = server;