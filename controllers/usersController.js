const usersModel = require('../models/usersModel');


const registerUser = async (req, res) => {
    try {
        res.status(200).json({ message: 'registerUser' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        res.status(200).json({ message: 'loginUser' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getUserProfile = async (req, res) => {
    try {
        res.status(200).json({ message: 'getUserProfile' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const updateUser = async (req, res) => {
    try {
        res.status(200).json({ message: 'updateUser' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const deleteUser = async (req, res) => {
    try {
        res.status(200).json({ message: 'deleteUser' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};














module.exports = {
    registerUser,
    loginUser,
    getUserProfile,
    updateUser,
    deleteUser
};
