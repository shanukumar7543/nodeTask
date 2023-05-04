const express = require('express')
const router = express.Router()
const api = require('../Controller')

/** Upload file */
router.post('/data/upload', api.uploadData)

/** Get all file */
router.get('/data/getAll', api.getData)

/** Get file from s3  */
// router.get('/file/getDetail/:id', api.getFileFromS3)

module.exports = router
