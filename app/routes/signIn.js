import Joi from 'joi';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import express from 'express';

const router = express.Router();

router.post('/', async (req, res) => {

  const schema = Joi.object({
    email   : Joi.string().min(3).max(200).required().email(),
    password: Joi.string().min(6).max(200).required(),
  })

  const { error } = schema.validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);


  // let user = await check user
  // if (!user) return res.status(400).send("Invalid email or password...");

})