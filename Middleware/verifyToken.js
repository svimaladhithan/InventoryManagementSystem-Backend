import jwt from 'jsonwebtoken'
import { errorHandler } from '../Utils/Error.js'
import dotenv from 'dotenv'

dotenv.config();

export const verifyToken= (req,res,next)=>{
    const token= req.headers.token;
    console.log(token);
    if(!token){
        return next(errorHandler(401,"Unauthorized Access"))
    }
    jwt.verify(token, process.env.JWT_SECRET_KEY,(err,user)=>{
        if(err){
            return next(errorHandler(401,"Unauthorized Access"))
        }
        req.user=user;
        next() 
    })
}