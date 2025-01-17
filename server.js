import express from "express"
import dotend from "dotenv"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import userRoutes from './routes/users.js'

dotend.config()

const port = process.env.PORT || 1997

const app = express()

app.use(bodyParser.json())
app.use('/users',userRoutes)

app.get('/',(req,res) => {
    console.log("GETTING ROUTE")
    res.send("HELLO FROM COIMBATORE")
})

const connectDb = async () => {
    const db = await mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDB Connected")
}
connectDb()

app.listen(port , () => console.log(`Server started on port ${port}`))