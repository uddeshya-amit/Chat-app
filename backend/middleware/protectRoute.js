import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
const protectRoute = async (req, res, next) => {
	try {
		const authtoken = req.cookies.token;
        

		if (!authtoken) return res.status(401).json({ error: "unauthorized no token" });
        console.log("token found")

		const decoded = jwt.verify(authtoken, process.env.JWT_SECRET_KEY);
       

		if (!decoded) return res.status(401).json({ error: "unauthorized invalid token" });

		const user = await User.findById(decoded.userId).select("-password");

		if (!user) return res.status(404).json({ error: "user not found" });

		req.user = user;
        next();

	} catch (error) {
		res.status(500).json({ error: "internal server error" });
        console.log(error.message)
	}
};
export default protectRoute;