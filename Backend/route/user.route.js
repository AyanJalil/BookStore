import express from 'express';
import {signup, login} from '../controller/user.controller.js';

const userroute = express.Router();

userroute.post("/signup", signup);
userroute.post("/login", login);

export default userroute;
