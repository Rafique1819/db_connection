import { User } from "../models/user";

export const Register = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;
        if (!fullName || !email || !password) {
            return res.status(403).json({
                success: false,
                message: " All fields required"
            })

        } const user = await User.findOne(email);
        if(user){
            return res.status(403).json({
                success:false,
                message:"This email id is already registered"
            }) 
        } await User.create({
            fullName,
            email,
            password
        }); 
        return res.status(202).json({
            success:true,
            message:"Account created successfully"
        })

    } catch (error) {

    }
}