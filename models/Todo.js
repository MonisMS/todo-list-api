import mongoose from "mongoose";

// Define the Todo schema
const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    completed: {
      type: Boolean,
      default: false, // Default value is false
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference the User model
      required: true,
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Create the Todo model
const Todo = mongoose.model("Todo", todoSchema);

export default Todo;