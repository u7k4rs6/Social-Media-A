import User from "../models/user.model.js"

export const signUp = async(req , res)=>{
    const {name , email,password , userName} = req.body

    if(!name || !email || !password || !userName){
        return res.status(400).json({message:"All fields are required"})
    }

    const exstingUserEmail = await User.findOne({email})
    if(exstingUserEmail){
        return res.status(400).json({message:"User with this email already exists"})
    }

    const exstingUserName = await User.findOne({userName})
    if(exstingUserName){
        return res.status(400).json({message:"User with this username already exists"})
    }


    await User.create({name , email,password , userName})
    res.status(201).json({message:"User created successfully"})
}