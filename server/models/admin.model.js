const mongoose = require("mongoose");
const AdminSchema = mongoose.Schema({


    FullName: {
        type: String,
        require: true,

    },
    EmailId: {
        type: String,
        require: true,
        unique: true,
    },

    password: {
        type: String,
        require: true,

    },
    MobileNo: {
        type: String,
        require: true,
        unique: true,
    },
    Address: {
        type: String,
        require: true,
    },
    DateOfJoining: {
        type: String,
        require: true,
    },
    Gender: {
        type: String,
        require: true,
    },
    DateOfBirth: {
        type: String,
        require: true,
    },
    Department: {
        type: String,
        require: true,
    },
    Nationality: {
        type: String,
        require: true,
    },
    createdOn: {
        type: Date,
        default: Date.now,
    },
});

const Admin = mongoose.model("admin", AdminSchema);
module.exports = Admin;


