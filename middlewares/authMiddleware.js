import User from "../models/userModel.js"
import jwt from 'jsonwebtoken';
import dotnev from 'dotenv';

dotnev.config();

const authenticateToken=async(req,res,next)=>{
    try {
        const token=req.cookies.jsonwebtoken;

        if(token){
            jwt.verify(token,process.env.JWT_SECRET,(err)=>{
                if(err){
                    console.log(err.message);
                    res.redirect("/login");
                }
                else{
                    next();
                }
            })
        }
        else{
            res.redirect("/login");
        }
    } catch (error) {
        return res.status(401).json({
            succeeded:false,
            error:'Not authorized'
        })
    }
}

export {authenticateToken};