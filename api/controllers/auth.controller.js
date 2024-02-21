import user from "../model/user.model.js";
import bcyptjs from "bcryptjs";

export const signUp = async (req, res,next) => {
  console.log("hi");
  console.log(req.body);

  const { userName, email, password } = req.body;

  if (
    !userName ||
    !email ||
    !password ||
    userName === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({ msg: "all field are required" });
  }
  const hashedPassword = bcyptjs.hashSync(password, 10);
  const newUser = new user({
    userName,
    email,
    password:hashedPassword,
  });

  try {
    await newUser.save();
    res.json({ msg: "signUp successfull" });
  } catch (error) {
 next(error)
  }
};
