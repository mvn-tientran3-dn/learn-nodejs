// // var fs = require("fs");
// // // var data = fs.readFileSync('input.txt');
// //
// // fs.readFile('input.txt', function (err, data) {
// //     if (err) return console.error(err);
// //     console.log(data.toString());
// // });
// //
// //
// // // console.log(data.toString());
// // console.log('End');
//

var http = require('http');
const port = 5000;
const { routes } = require("./src/routes");

const server = http.createServer((req, res) => {
    routes(req, res);
});

server.listen(port, (err) => {
    if (err) {
        console.log(`Error: ${err}`);
        return;
    }
    console.log(`Server listening with port ${port}`);
});
