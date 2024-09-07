import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({                    // solving cross origin resource sharing
    origin: process.env.ORIGIN,
    credentials: true,
}))

app.use(express.json({                         //accepting json and setting limit 
    limit: "16kb",
}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))   //for url and query parameters
app.use(express.static("public"))
app.use(cookieParser()) // for secure cokkie reading 

//routes
import router from './routes/user.routes.js'

app.use("/api/v1/users", router)

export {app}