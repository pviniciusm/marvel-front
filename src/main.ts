import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + "/../public"));

app.listen(8082, () => console.log("Server front is running..."));
