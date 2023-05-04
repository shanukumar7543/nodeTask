const axios = require('axios')
const db = require('../models')

exports.uploadData = async (req, res, next) => {
  try {
    const data = await axios({
      url: 'https://api.publicapis.org/entries',
      method: 'get',
    })
    const dbRecords = []
    console.log('aaaa', data.data.entries)
    if (data.data.entries) {
      for (let index = 0; index < data.data.entries.length; index++) {
        const element = data.data.entries[index]
        dbRecords.push(element)
      }
      console.log('dddd', dbRecords)
      await db.fake_api_records.bulkCreate(dbRecords)
    }
    res.json({
      message: 'data inserted  Successfully',
    })
  } catch (err) {
    if (!err.statusCode) {
      err.message = 'Internal Server Error !!'
      err.statusCode = 500
    }
    next(err)
  }
}
exports.getData = async (req, res, next) => {
  try {
    const data = await db.fake_api_records.findAll()

    res.json({
      message: 'data inserted  Successfully',
      data: data,
    })
  } catch (err) {
    if (!err.statusCode) {
      err.message = 'Internal Server Error !!'
      err.statusCode = 500
    }
    next(err)
  }
}
