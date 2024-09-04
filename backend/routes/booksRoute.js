import express from 'express';
import Book from "../../backend/db.js"
const router =express.Router();

router.post('/',async (req,res)=>{
    try {
        if(!req.body.title || !req.body.author  || !req.body.publishedYear){
             return res.status(400).send({
                msg: "req feild failed"
             })

        }
        const newBook={
           title: req.body.title,
           author: req.body.author,
           publishedYear: req.body.publishedYear,
        }
        const book=await Book.create(newBook);
        return res.status(201).send(book);
    } catch (error) {
        console.log(error);
        res.status(500).send(
           { 
            msg:"error"

           }
        )
    }

})
router.get('/', async (req,res)=>{
    try {
        const books=await Book.find({});
        res.status(201).json({
            count:books.length,
            data:books
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(
           { 
            msg:"error"

           }
        )
    }
})

router.get('/:id', async (req,res)=>{
    try {
        const {id}=req.params
        const book=await Book.findById(id);
        res.status(201).json(book)
    } catch (error) {
        console.log(error);
        res.status(500).send(
           { 
            msg:"error  findByid"

           }
        )
    }
})


router.put('/:id',async (req,res)=>{
    try {
        if(!req.body.title || !req.body.author  || !req.body.publishedYear){
            return res.status(400).send({
               msg: "req feild failed"
            })
           
       }
       const {id}=req.params;
       const result=await Book.findByIdAndUpdate(id,req.body);
       if(!result){
        return res.json({
            msg:" Book not found"
        })
       }
       res.json({
        msg:" Book updated"
       })
    }catch (error) {
        console.log(error);
        res.status(500).send(
           { 
            msg:"error updating"

           }
        )
    }
})

router.delete('/:id',async (req,res) => {
const {id}=req.params;
 const result=await Book.findByIdAndDelete(id);
 if(!result){
    return res.json({
        msg:"not found while deleting"
    })
 }
    res.json({
        msg:" deleted succesfully"
    })
})
 export default router