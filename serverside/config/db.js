require("dotenv").config();
const mongoose = require("mongoose");

// const connect=()=>{
//     return mongoose.connect("mongodb+srv://vinayak16:vicky16@cluster0.u3ddfdh.mongodb.net/NEM201-PROJECT?retryWrites=true&w=majority",{ 
//         useNewUrlParser: true, 
//         useUnifiedTopology: true
//         },(err) => {
//         if (err) {
//         console.log("error in connection");
//         } else {
//         console.log("mongodb is connected");
// }})
// }

const connect = async ()=>{
    return mongoose.connect(process.env.DB_URL)
   
}
module.exports=connect;

