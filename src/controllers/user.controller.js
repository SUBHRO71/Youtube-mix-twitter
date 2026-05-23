import { asynchandler } from "../utils/asynchandler";

const registerUser = asynchandler(async(req,res) => {
    res.status(200).json({
        message: "Registration Done"
    })
})

export {registerUser}