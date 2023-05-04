const Joi = require('joi')
const con = require('../models/index')

let get = async (req, res) => {
  try {
    const data = 'SELECT * FROM user'
    await con.query(data, (err, result) => {
      if (err) {
        return err.sqlMessage
      }
      res.send(result)
    })
  } catch (err) {
    res.send(err.sqlMessage)
  }
}
let getbyid = async (req, res) => {
  try {
    let id = req.params.id
    const data = 'SELECT * FROM user where id =?'
    await con.query(data, id, (err, result) => {
      if (err) {
        return err.sqlMessage
      }
      res.send(result)
    })
  } catch (err) {
    res.send(err.sqlMessage)
  }
}

let post = async (req, res) => {
  try {
    let data1 = [req.body]
    // await Joi.validate(data1, userSchema)
    const query1 = 'INSERT INTO user set ? '
    await con.query(query1, data1, (err, result) => {
      if (err) {
        return res.send(err.sqlMessage)
      }
      res.send({ status: 200, response: result })
    })
  } catch (err) {
    res.send(err.sqlMessage)
  }
}

let patch = async (req, res) => {
  try {
    let data2 = [req.body, req.params.id]
    query2 = 'UPDATE user SET ? WHERE id = ? '
    await con.query(query2, data2, (err, result) => {
      if (err) {
        return res.send(err.sqlMessage)
      }
      res.send(result)
    })
  } catch (err) {
    res.send(err.sqlMessage)
  }
}

let remove = async (req, res) => {
  try {
    let data = req.params.id
    let query2 = 'DELETE FROM user WHERE id = ?'
    await con.query(query2, data, (err, result) => {
      if (err) {
        res.send(err.sqlMessage)
      }
      {
        res.send(result)
      }
    })
  } catch (err) {
    res.send(err.sqlMessage)
  }
}

const userSchema = Joi.object().keys({
  name: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().min(3).required(),
  phone: Joi.number().min(10).max(10).required(),
  address: Joi.string().alphanum().min(5).max(255).required(),
})
module.exports = { get, getbyid, post, patch, remove }
