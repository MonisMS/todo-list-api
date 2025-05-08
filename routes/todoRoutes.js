import express from "express"
import Todo from "../models/Todo.js";
import authMiddleware from "../middlewares/auth.middleware.js";


const router=express.Router();
//create a new todo
router.post("/",authMiddleware,async(req,res)=>{
try {
    const {title,description} = req.body;
    const todo=new Todo({      //new mongoose schema sort of
        title,
        description,
        user:req.user,  //user id from auth middleware
    })

    await todo.save();
    res.status(201).json({message:"Todo created Successfully",todo})
} catch (error) {
    res.status(400).json({error:error.message})
}
});

//get all todos for logged in user
router.get("/",authMiddleware,async(req,res)=>{
    try {
        const todos=await Todo.find({user:req.user});
        res.status(200).json({todos});

    } catch (error) {
        res.status(400).json({error:error.message})
    }
});

//get all todos for logged in user with paginaion and filtering
router.get("/",authMiddleware,async(req,res)=>{
    try {
        const {page=1,limit=10,completed}=req.query;

        //filter object
        const filter = { user: req.user };
        if (completed !== undefined) {
          filter.completed = completed === "true"; // Convert string to boolean
        }
    
        // Fetch todos with pagination
        const todos = await Todo.find(filter)
          .skip((page - 1) * limit) // Skip documents for previous pages
          .limit(Number(limit)); // Limit the number of documents per page
    
        // Get the total count of todos for the user
        const totalTodos = await Todo.countDocuments(filter);
    
        res.status(200).json({
          todos,
          totalTodos,
          totalPages: Math.ceil(totalTodos / limit),
          currentPage: Number(page),
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
//update the todo
router.put("/:id",authMiddleware,async(req,res)=>{
const {id}=req.params;
const {title,description,completed}=req.body;

try {
    const todo= await Todo.findOneAndUpdate(
        {_id:id,user:req.user},
        {title,description,completed},
        {new:true}
    );
    if(!todo){
        return res.status(404).json({message:"Todo not found"})
    }
    
    res.status(200).json({message:"todo updated successfully",todo})
    
    
} catch (error) {
    res.status(400).json({ error: error.message });

}
});

//delete a todo
router.delete("/:id",authMiddleware,async(req,res)=>{
    try {
        const {id}=req.params;
        const todo=await Todo.findOneAndDelete({_id:id,user:req.user})
        if(!todo){
            return res.status(404).json({message:"Todo not found"});

        }

        return res.status(200).json({message:"Todo deleted succesfully"})
    } catch (error) {
        res.status(500).json({message:error.message})

    }
})

export default router;