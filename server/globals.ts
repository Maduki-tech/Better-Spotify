import axios from "axios";

const express = require("express");
const cors = require('cors')
const app = express();
const port = 3001;

app.use(cors())
app.get("/globals", (req: any, res: any) => {
  const options = {
    method: "GET",
    url: "https://shazam-core.p.rapidapi.com/v1/charts/country",
    // TODO: HERE THE COUNTY CODE
    params: { country_code: "DZ" },
    headers: {
      "X-RapidAPI-Key": "35d3012f8dmshb1f84accbedd33ap1445e7jsn60f805a4befc",
      "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      // TODO: here the response for frontend
      console.log(response.data);
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
