const jwt=require("jsonwebtoken");


const verifyToken=(req,res,next)=>{
    const authHeader=req.headers.token
    if (authHeader) {
        const token=authHeader.split(" ")[1]
        jwt.verify(token,process.env.JWT_SEC,(err,user)=>{
            if (err) res.status(403).json("Token geçerli değil");
            req.user=user
            next();
        });
    } else {
        return res.status(401).json("Giriş yapmalısınız.");
    }
}

const verifyTokenAndAuthorization=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if (req.user.id===req.params.id || req.user.isAdmin) {
        next();
        }else{
            res.status(403).json("Bu işlemi yapmaya yetkili değilsiniz!")
        }
    })
}

const verifyTokenAndAdmin=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if (req.user.isAdmin) {
        next();
        }else{
            res.status(403).json("Bu işlemi yapmaya yetkili değilsiniz!")
        }
    })
}

module.exports={verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin}