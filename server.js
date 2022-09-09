var _ = require("lodash");
const port = 3000;
var express = require("express");
var app = express();
var servers = require("./serverlist");
var axios = require("axios");

const findServer = async (serverlist) => {
  //sorted by proiroty
  const sortedServerlist = _.sortBy(serverlist, ["priority"]);

  //Execute simultanerously
  const promiseArray = await Promise.allSettled(
    sortedServerlist.map(async (server) => {
      const response = await axios.get(server.url, { timeout: 5000 }); //after 5 seconmds it will timeout
      return {
        status: response.status,
        url: server.url,
        priority: server.priority,
      };
    })
  );

  //filter for online servers
  const onlineServers = promiseArray.filter(
    //A server should be considered online if it’s response status code is between 200 and 299.
    (value) => value.status == "fulfilled"
  );
  return new Promise((resolve, reject) => {
    if (onlineServers.length > 0) {
      //Resolves with the online server that has the lowest priority number.
      resolve(JSON.stringify(onlineServers[0]));
    } else {
      // Rejects with an error, if no Servers are online.
      const noServerAvail = "Servers are offline";
      reject(noServerAvail);
    }
  });
};

//get request
app.get("/findservers", async (req, res) => {
  try {
    const response = await findServer(servers.serverlist);
    console.log("Response: ", response);
    res.send(response);
  } catch (err) {
    console.log(err);
    res.send("Servers are Offline");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
