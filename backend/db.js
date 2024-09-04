import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        author:{
            type:String,
            required:true
        },
        publishedYear:{
            type:String,
            required:true
        }
    },
    {timestamps:true 

    }
)

const Book=mongoose.model('books',bookSchema);

export default Book;