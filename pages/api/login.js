import connectDB from "@/lib/connect";
import User from "../../models/User.js";
import jwt from "jsonwebtoken";

const validate = async (req, res) => {
  // Validation for the login page
  if (req.method == "POST") {
    console.log(process.env.SERVER_SECRET_SIGN);
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.json({ token: "" });
      return;
    }

    if (user.password == req.body.password) {
      const token = jwt.sign(
        { _id: user._id },
        process.env.SERVER_SECRET_SIGN,
        {
          expiresIn: "1d",
        }
      );
      res.json({ token: token });
    } else {
      res.json({ token: "" });
    }
  }
};

export default connectDB(validate);
