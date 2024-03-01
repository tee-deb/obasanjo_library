const mongoose = require('mongoose');


const bookSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: (true, "Please add the book name"),
        },

        author: {
            type: String,
            required: (true, "Please add the author name"),
        },
        //code: {
          //  type: String,
            //required: true,
            //unique: true,
            //maxlenght: 5 
       // },

        quantity: {
            type: Number,
            required: (true, "Please add the number of book"),
            default: 0
        },

    },
    
    {
        timestamps: true,
    }
    
    );

    module.exports = mongoose.model("Book", bookSchema);
    
    
