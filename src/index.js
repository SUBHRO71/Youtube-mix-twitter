import dotenv from "dotenv";
import connectDB from "./db/db.js";

dotenv.config({
    path: "./.env"
})

connectDB().then(() => {
    app.on("error", (error) => {
        console.log("Server error: ", error);
        throw error;
    });

    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server is running on port ${process.env.PORT || 5000}`);
    })
})
.catch((error) => {
    console.log("Error connecting to DB or starting server: ", error);
});