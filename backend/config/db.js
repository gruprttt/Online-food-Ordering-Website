import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://gruprttt:Gru1540@cluster0.lwun3r1.mongodb.net/food-del').then(() => console.log("DB connected"));
}