const logsModel = require('../models/logsModel');


const getAllLogs = async (req, res) => {
    try {
        
        res.status(200).json({ message: 'get all logs' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


const getLogById = async (req, res) => {
    try {
        
        res.status(200).json({ message: 'get a log by id' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const deleteLog = async (req, res) => {
    try {
       
        res.status(200).json({ message: 'delete a log' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


module.exports = {
    getAllLogs, getLogById, deleteLog
};
