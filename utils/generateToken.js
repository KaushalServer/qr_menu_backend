import jwt from "jsonwebtoken"

const generateTokenAndSetCookie = (userId, res) => {

    const token = jwt.sign({userId}, process.env.JWT_TOKEN, {
        expiresIn: '15d' // expires in 15 days
    });
    // console.log("Generated token:- ", token);

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in miliseconds
        httpOnly: true, // prevent XSS attack
        sameSite: "None",
        // secure: false,
    });
}

export default generateTokenAndSetCookie;