const asyncHandler = require("express-async-handler");


const loginAdmin = asyncHandler(async(req, res) => {
    res.json({ message: "Login the admin"});

});

const currentAdmin = asyncHandler(async(req, res) => {
    res.json({ message: "Current Admin information"});
});

module.exports = { loginAdmin, currentAdmin};