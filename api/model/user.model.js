import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
    unique: true,
  },

  email: {
    type: String,
    require: true,
    unique: true,
  },

  password: {
    type: String,
    require: true,

  },




});
const user = mongoose.model('user', userSchema);

export default user;