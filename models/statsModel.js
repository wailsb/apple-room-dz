// models/statsModel.js

// Import database connection
const { pool } = require('../db');


async function getAllStats() {
  try {
    // TODO : Add query to get all the stats
  } catch (error) {
    throw error;
  }
}

async function getStatById(id) {
    try {
      // TODO : Add query to get the stat by id
    } catch (error) {
      throw error;
    }
  }

async function createStat(statData) {
  try {
    // TODO : Add query to create a new stat
  } catch (error) {
    throw error;
  }
}

async function updateStat(id, statData) {
  try {
    // TODO : Add query to update the stat by id
  } catch (error) {
    throw error;
  }
}

async function deleteStat(id) {
  try {
    // TODO : Add query to delete the stat by id
  } catch (error) {
    throw error;
  }
}

module.exports = { getAllStats, createStat, updateStat, deleteStat,getStatById };
