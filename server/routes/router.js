import express from "express";
// import JWT from "jsonwebtoken";
import { comparePassword, hashPassword } from "../bcrypt/bcrypt.js";
import authenticate from "../middleware/authenticate.js";

import productschema from "../models/productschema.js";
import userSchema from "../models/userSchema.js";
const router = express.Router();
router.get("/getproducts", async (req, res) => {
  try {
    const productsdata = await productschema.find();
    res.status(201).json(productsdata);
  } catch (error) {
    console.log(error.message + "error in finding product");
  }
});

//get individual data
router.get("/getproductsone/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const individualdata = await productschema.findOne({ id: id });
    res.status(201).json(individualdata);
    // res.send(individualdata)
  } catch (error) {
    res.status(400).json(individualdata);
    console.log("Error" + error.message);
  }
});
// register route
router.post("/register", async (req, res) => {
  const { fname, mobile, semail, spassword } = req.body;
  if (!fname || !mobile || !semail || !spassword) {
    res.status(402).json({ error: "Fill the data" });
    console.log("not data validate");
  }
  try {
    const preuser = await userSchema.findOne({ semail });
    if (preuser) {
      res.status(402).json({ error: "User already present" });
    } else {
      const HashPassword = await hashPassword(spassword);
      const finalUser = new userSchema({
        fname,
        mobile,
        semail,
        spassword: HashPassword,
      });
      const storedata = await finalUser.save();
      // console.log(storedata);
      res.status(201).json(storedata);
    }
  } catch (error) {
    console.log("Error" + error.message);
  }
});

// login route

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  if (!email || !password) {
    res.status(400).json({ error: "All fields are required" }), password;
  } else {
    try {
      const userLogin = await userSchema.findOne({ semail: email });
      if (userLogin) {
        const isMatch = await comparePassword(password, userLogin.spassword);
        console.log(isMatch + "passmatch");
        //token generate
        if (isMatch) {
          const token = await userLogin.generateAuthtoken();
          res.cookie("Amazonweb", token, {
            expires: new Date(Date.now() + 4000000),
            httpOnly: true,
          });
          return res.status(201).json(userLogin);
        } else {
          res.status(400).json("Details are not matched");
        }
      } else {
        res.status(400).json("Invalid details");
      }
    } catch (error) {
      res.status(400).json({ error: "invalid" });
    }
  }
});

// data into cart

router.post("/addcart/:id", authenticate, async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await productschema.findOne({ id });
    console.log(cart + "cart value");

    const UserContact = await userSchema.findOne({ _id: req.userId });
    console.log(UserContact);
    if (UserContact) {
      const cartData = await UserContact.addCartdata(cart);
      await UserContact.save();
      console.log(cartData);
      res.status(201).json(UserContact);
    }
  } catch (error) {
    console.log(error);
  }
});
// get cart details

router.get("/cartdetails", authenticate, async (req, res) => {
  try {
    const buyuser = await userSchema.findOne({ _id: req.userId });
    console.log(buyuser + "user hain buy pr");
    res.status(201).json(buyuser);
  } catch (error) {
    console.log("Error" + error);
  }
});

// get valid user
router.get("/validuser", authenticate, async (req, res) => {
  try {
    const validuserone = await userSchema.findOne({ _id: req.userId });
    console.log(validuserone + "user verified hai");
    res.status(201).json(validuserone);
  } catch (error) {
    console.log("Error" + error);
  }
});
router.delete("/remove/:id", authenticate, async (req, res) => {
  try {
    const { id } = req.params;
    req.rootUser.carts = req.rootUser.carts.filter((curval) => {
      return curval.id != id;
    });
    req.rootUser.save();
    res.status(201).json(req.User);
    console.log("item deleted");
  } catch (error) {
    console.log("item delete nhi ho rha" + error);
  }
});
// logout user
router.get("/logout",authenticate,async(req,res)=>{
   try{
      req.rootUser.tokens = await req.rootUser.tokens.filter((currelement)=>{
        return currelement.token!==req.token
      })
      res.clearCookie("Amazonweb",{path:"/"});
      req.rootUser.save();
      res.status(201).json(req.rootUser.tokens)
      console.log("logout successfully");
   }
   catch(error){
      console.error("logout nhi ho rha"+error)
   }
})

export default router;
