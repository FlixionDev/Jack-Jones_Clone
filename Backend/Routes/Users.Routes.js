const express = require("express");
const { UserModel } = require("../Models/Users.model")
const userRouter = express.Router();
const bcrypt = require("bcrypt")
require("dotenv").config()
const jwt = require("jsonwebtoken")
userRouter.post("/register", async (req, res) => {
    const { name, email, mob_no, pass, dob } = req.body
    try {
        let findUser = await UserModel.find({ email });
        if (findUser.length > 0) {
            res.send({ "message": "Your email is already registered. Please login!" })
        } else {
            bcrypt.hash(pass, 8, async (err, hashPassword) => {
                if (err) {
                    console.log(err);
                    res.send({ "message": "Something went wrong" })
                } else {
                    let userData = new UserModel({ name, email, mob_no, "pass": hashPassword, dob });
                    await userData.save();
                    res.send({ "message": "User Register Successfull" })
                }
            });
        }
    } catch (err) {
        console.log(err);
        res.send({ "error": err })
    }
})

userRouter.post("/login", async (req, res) => {
    const { email, pass } = req.body;
    try {
        if (email && pass) {
            let findUser = await UserModel.find({ email });
            if (findUser.length > 0) {
                let encryptedPass = findUser[0].pass;
                bcrypt.compare(pass, encryptedPass, (err, result) => {
                    if (result) {
                        let token = jwt.sign({ "userId": findUser[0]._id }, process.env.tokenKey);
                        res.send({ "message": "Login successfull", "token": token,"name":findUser[0].name,"email":findUser[0].email })
                    } else if (result === false) {
                        res.send({ "message": "Wrong Password" })
                    } else {
                        console.log(err);
                        res.send({ "error": err })
                    }
                });
            } else {
                res.send({ "message": "No account found with this email. Please Register" })
            }
        } else {
            res.send({ "message": "Something went wrong" })
        }
    } catch (err) {
        console.log(err);
        res.send({ "error": err })
    }
})

module.exports = {
    userRouter
}