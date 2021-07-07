const express = require("express");
const router = new express.Router();
const Student = require("../models/students");

//Wihtout Async Await
// app.post("/students",(req,res)=>{
//     console.log(req.body);
//     const user = new Student(req.body)

//     user.save()
//     .then(()=>{
//         res.status(201).send(user);
//     })
//     .catch((error)=>{
//         res.status(400).send(error);
//     })

//     // res.send("Hello from the other side");
// })

//With Async Await Starts Here!
router.post("/students",async(req,res)=>{
    
    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
        
    } catch (error) {
        res.status(400).send(error)
        
    }
})
//With Async Await Ends Here!

//Reading the registered Student Data Starts Here!

router.get("/students",async(req,res)=>{
    try {
        const studentsData = await Student.find();
        res.send(studentsData);

    } catch (error) {
        res.send(error)
        
    }
})

//Reading the registered Student Data Ends Here!

//Getting individual Student Data Starts Here!

router.get("/students/:id",async(req,res)=>{
    try {
        const _id = req.params.id;
        const studentData = await Student.findById(_id);
        if(!studentData){
            res.status(404).send();
        }
        else{
            res.send(studentData);
        }
        
    } catch (error) {
        res.status(500).send(error)
    }
})

//Getting individual Student Data Ends Here!


//Updating the student data by its id starts here!

router.patch("/students/:id",async(req,res)=>{
    try {
        const _id = req.params.id;
        const updateStudents = await Student.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.send(updateStudents);
        
    } catch (error) {
        res.status(400).send(error);
        
    }
})

//Updating the student data by its id Ends here!

//Deleting Student Data By its Id Starts Here!

router.delete("/students/:id",async(req,res)=>{
    try {
        const _id = req.params.id;
        if(!_id){
            return res.status(400).send();
        }
        else{
            const deleteStudent = await Student.findByIdAndDelete(_id);
            res.send(deleteStudent)
        }
        
    } catch (error) {
        res.status(500).send(error);
    }
})

//Deleting Student Data By its Id Ends Here!

module.exports = router;