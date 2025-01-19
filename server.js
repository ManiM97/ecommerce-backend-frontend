import express from "express";
import dotend from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRoutes from "./routes/users.js";
import welcomeRoutes from './routes/welcome.js'
import path from 'path'
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotend.config();

const port = process.env.PORT || 1997;

const app = express();
app.use(bodyParser.urlencoded());
// FOR THE USE CSS WITH ACCESSING STATIC FILE AN DONLY GIVE ABOVE THE ROUTES

// app.use(express.static(path.join(__dirname,'public')))
app.use('/user',userRoutes)
app.use(welcomeRoutes)
app.use((req,res,next)=> {
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})


// const connectDb = async () => {
//     const db = await mongoose.connect(process.env.MONGO_URI)
//     console.log("MongoDB Connected")
// }
// connectDb()

app.listen(port, () => console.log(`Server started on port ${port}`));
