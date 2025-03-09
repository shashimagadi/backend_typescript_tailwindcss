const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserDetails =require('../models/UserDetails')
const _ = require("lodash");


// const getUserDetails = async (req, res) => {
//     try {
//         const users = await UserDetails.findAll();
        
//         if (users.length === 0) {
//             return res.status(404).json({ error: "No users found" });
//         }

//         res.status(200).json(users);
//     } catch (error) {
//         res.status(500).json({ error: "Failed to fetch user details" });
//     }
// };

const getUserDetails = async (req, res) => {
    try {
        let users = await UserDetails.findAll();

        if (_.isEmpty(users)) {
            return res.status(404).json({ error: "No users found" });
        }

        
        users = users.map(user => _.pick(user, ["id", "name", "position", "description"]));

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch user details" });
    }
};

// const createUserDetails = async (req, res) => {
//     try {
//         const { name, position, description } = req.body;

//         // Validate input data
//         if (!name || !position) {
//             return res.status(400).json({ error: "Name and Position are required" });
//         }

//         const newUser = await UserDetails.create({ name, position, description });
//         res.status(201).json({ newUser, message: "User created successfully" });

//     } catch (error) {
//         res.status(500).json({ error: "Failed to create user" });
//     }
// };

const createUserDetails = async (req, res) => {

    try {
        let { name, position, description } = req.body;

      console.log("req, body", req.body);
      
        const cleanedData = 
        _.omitBy({ name, position, description }, _.isEmpty);

       
        if (_.isEmpty(cleanedData.name) || _.isEmpty(cleanedData.position)) {
            console.log("Name and Position are required");
            return res.status(400).json({ error: "Name and Position are required" });
          }

        const newUser = await UserDetails.create(cleanedData);
        res.status(201).json({ newUser, message: "success" });

    } catch (error) {
        console.log(error, "Name and Position are required  catch block");
        res.status(500).json({ error: "Failed to create user" });
    }
};





const updateUserDetails = async (req, res) => {
    try {
        console.log("req body for update  ", req.body);
        const { id } = req.params;
        let { name, position, description } = req.body;

        const user = await UserDetails.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const updatedData = _.omitBy({ name, position, description }, _.isEmpty);

        await user.update(updatedData);
        res.status(200).json({ user, message: "success" });

    } catch (error) {
        res.status(500).json({ error: "Failed to update user" });
    }
};



const deleteUserDetails = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await UserDetails.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        await user.destroy();
        return res.status(200).json({ message: "success" });

    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports={createUserDetails, updateUserDetails, deleteUserDetails,getUserDetails}