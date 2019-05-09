import * as express from "express";
import * as http from "http";
import * as bodyParser from "body-parser";
import { handler } from "./index";

const app = express();
const server = new http.Server(app);

app.use(bodyParser.json());

app.post("/", async (req, res) => {
    const result = await handler(req);
    res.send(result);
});

const port = process.env.PORT || 8000;
server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
