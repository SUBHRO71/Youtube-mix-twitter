
const asynchandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
    }
}

export {asynchandler};



//The asynchandler to handle using normal try catch rather than promise

// const asynchandler = (fn) => {
//     async(req,res,next)=>{
//         try{
//             await fn(req,res,next);
//         }catch(e){
//             res.status(err.code || 500).json({
//                 success:false,
//                 message:err.message
//             })
//         }
//     }
// }