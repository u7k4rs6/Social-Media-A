import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/db.js'


const app = express()
const PORT = 8000 
app.use(express.json())

connectDB()

app.get('/', (req, res) => {
  res.send('Hello from the social server!')
})

app.listen(PORT, () => {
  console.log(`Social server is running on http://localhost:${PORT}`)
})
