import jwt from "jsonwebtoken";
const authMiddleware=async(req,res,next)=>{
    try {
        const token=req.headers.authorization?.split(" ")[1];
        if(!token){
            return res.status(401).json({message:"No token provided,duthorization denied"})

        }

        //verify the token
        const decoded=jwt.verify(token,process.env.JWT_SECRET);

        //attach user id to request object
        req.user=decoded.id;
        next();  //proceeds to next middleware or route handeler

    } catch (error) {
        res.status(401).json({message:"Invalid token,authorization denied"})
    }
}

export default authMiddleware;