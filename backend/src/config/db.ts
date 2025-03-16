import mongoose from "mongoose";

import dotenv from 'dotenv'
dotenv.config();

const UserSchema = new mongoose.Schema({
    username : {type : String , required : true , unique :true},
    email : {type:String , required : true},
    password : {type : String , required :true},
})

export const UserModel = mongoose.model("User",UserSchema);

const MONGO_URI = process.env.MONGO_URI  || "mongodb://localhost:27017/paytm";
mongoose.connect(MONGO_URI,{
    useNewUrlParser : true,
    useUnifiedTopology : true
}as any)


.then(()=>console.log("MONGODB CONNECTED"))
.catch((err)=>{
    console.error("MONGODB connectd error ",err);
    process.exit(1)
})
export default mongoose