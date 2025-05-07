import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// Define the User schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true, // Ensure email is unique
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);


//hashing
userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        return next() //skip if password is modified
    }
const salt=await bcrypt.genSalt(10);
this.password = await bcrypt.hash(this.password,salt);
next()
})


// Create the User model
const User = mongoose.model("User", userSchema);

export default User;