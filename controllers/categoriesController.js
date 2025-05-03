const categoriesModel = require('../models/categoriesModel');


const getAllCategories = async (req, res) => {
    try {
        res.status(200).json({ message: 'get all categories' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};


const getCategoryById = async (req, res) => {
    try {
        res.status(200).json({ message: 'get category by id' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};


const createCategory = async (req, res) => {
    try {
        res.status(201).json({ message: 'category created' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};


const updateCategory = async (req, res) => {
    try {
        res.status(200).json({ message: 'category updated' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

const deleteCategory = async (req, res) => {
    try {
        res.status(200).json({ message: 'category deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory };
