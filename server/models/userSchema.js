import mongoose from "mongoose";
const secretkey = process.env.JWT_SECRET;
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    trim: true,
  },
  mobile: {
    type: Number,
    required: true,
    trim: true,
    unique: true,
    maxlength: 10,
  },
  semail: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    // validate(value) {
    //   if (!validator.isEmail(value)) {
    //     throw new console.error("Email is not valid");
    //   }
    // },
  },
  spassword: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  carts: Array,
});
// token generate




userSchema.methods.generateAuthtoken = async function () {
  try {
    // console.log(this.tokens);
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET,{expiresIn:"1d"});
    this.tokens = this.tokens.concat({token:token});
    await this.save();
    return token;
  } catch (error) {
    console.log(error + " error");
  }
};


userSchema.methods.addCartdata =async function(cart){
  try{
    this.carts=this.carts.concat(cart);
    await this.save();
    return this.carts
  }
  catch(error){
    console.log(error)
  }
}


export default mongoose.model("USER", userSchema);
