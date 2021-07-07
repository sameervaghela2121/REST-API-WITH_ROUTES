const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name: {
        type:String,
        requried:true,
        minlength:3
    },
    email: {
        type:String,
        required:true,
        unique:[true,"Email id allready present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    phone: {
        type:Number,
        min:10,
        required:true,
        unique:true
    },
    address: {
        type:String,
        required:true,

    }
})


//Creating a new Collection

const Student = new mongoose.model('Student',studentSchema);

module.exports = Student;