const http = require("http"); //handles networking capabilities

const PORT = 8001;

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
};

const server = http.createServer((req, res) => {
  var url = req.url;
  var method = req.method;

  if (url === "/api/v1/colors" && method === "GET") {
    //   specify that data return will be json
    res.writeHead(200, {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    });

    var colors = {
      red: getRandomInt(0, 256),
      green: getRandomInt(0, 256),
      blue: getRandomInt(0, 256),
    };
    console.log(colors);
    res.end(
      JSON.stringify({
        status: "success",
        data: {
          colors,
        },
      })
    );
  } else {
    res.writeHead(404);
    res.end("no data found");
  }

  //   res.end("hello from node...");
});
server.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
