import express from "express"
import dotend from "dotenv"
import mongoose from "mongoose"

dotend.config()

const port = process.env.PORT || 1997

const app = express()

const connectDb = async () => {
    const db = await mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDB Connected")
}
connectDb()

app.listen(port , () => console.log(`Server started on port ${port}`))