import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))  //This is to handle json data from request body. We have set the limit to 16kb to prevent large payloads which can lead to DoS attacks.
app.use(express.urlencoded({extended: true, limit: "16kb"}))  //This is to handle data from url.
app.use(express.static("public"))  //This is to serve static files like images, css, js etc. from the "public" directory. So if we have an image in public/images folder, we can access it via http://localhost:PORT/images/imageName.jpg

app.use(cookieParser())




export {app};