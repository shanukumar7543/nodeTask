const express = require('express')

const user_Routes = express.Router()

const { get, post, patch, remove, getbyid } = require('../Controller/index')

/**
 *  @swagger
 *  components:
 *       schemas:
 *            user:
 *              type: object
 *              properties:
 *                  id:
 *                      type: string
 *                  name:
 *                      type: string
 *                  email:
 *                      type: string
 *                  phone:
 *                      type: string
 *                  address:
 *                      type: string
 *
 *
 *
 */

/**
 * @swagger
 * /user/view:
 *        get:
 *             summary: display all users
 *             description: node js api
 *             responses:
 *                  200:
 *                      description: to test the Get method
 *                      content:
 *                           application/json:
 *                                  schema:
 *                                      type: array
 *                                      items:
 *                                          $ref : '#components/schemas/user'
 *
 */

user_Routes.get('/view', get)

/**
 * @swagger
 * /user/view/{id}:
 *        get:
 *             summary: api of my user tables
 *             description: node js api
 *             responses:
 *                  200:
 *                      description: to test the get method
 *                      content:
 *                           application/json:
 *                                  schema:
 *                                      type: array
 *                                      items:
 *                                          $ref : '#components/schemas/user'
 *
 */
user_Routes.get('/view/:id', getbyid)

/**
 * @swagger
 * /user/add:
 *      post:
 *         summary: This Api Is created for Add user into Database
 *         description: node js post api
 *         requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                           $ref : '#components/schemas/user'
 *      responses:
 *          200:
 *              description: added sucessfully
 *
 */

user_Routes.post('/add', post)

/**
 * @swagger
 * /user/update/{id}:
 *      patch:
 *         summary: node js api
 *         description: node js update api
 *         parameters:
 *             - in: path
 *               name: id
 *               required: true
 *               description: id is required
 *               schema:
 *                 type: integer
 *         requestBody:
 *               required: true
 *               content:
 *                   application/json:
 *                              schema:
 *                                 $ref : '#components/schemas/user'
 *      responses:
 *          200:
 *              description: added sucessfully
 *              content:
 *                   application/json:
 *                          schema:
 *                             type: array
 *                             items:
 *                                   $ref : '#components/schemas/user'
 *
 */

user_Routes.patch('/update/:id', patch)

/**
 * @swagger
 * /user/remove/{id}:
 *      delete:
 *         summary: node js api
 *         description: node js post api
 *         parameters:
 *             - in: path
 *               name: id
 *               required: true
 *               description: id is required
 *               schema:
 *                 type: string
 *      responses:
 *          200:
 *              description: added sucessfully
 *
 */

user_Routes.delete('/remove/:id', remove)

module.exports = { user_Routes }
