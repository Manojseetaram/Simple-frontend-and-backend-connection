import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import user from "./router/router.user";

dotenv.config();
const PORT = process.env.PORT
const app = express();





app.use(express.json());

app.use(cors())

app.use(user)

app.listen(PORT, ()=>{
   console.log(`Server is running on ${PORT}`);
})