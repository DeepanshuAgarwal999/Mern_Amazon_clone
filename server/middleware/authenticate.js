import jwt from "jsonwebtoken";
import userSchema from "../models/userSchema.js";
const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.Amazonweb;
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    console.log(verifyToken);
    const rootUser = await userSchema.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    console.log(rootUser);
    if (!rootUser) {
      throw new Error("User not found");
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userId = rootUser._id;
 console.log("done hia sabkuch")
    next();
  } catch (error) {
    console.log(error + " Error in auhentication middleware");
    res.status(401).send("unauthorised:No token provide");
  }
};
export default authenticate;
