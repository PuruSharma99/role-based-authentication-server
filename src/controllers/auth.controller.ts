import {USERS} from "../db/user.db";
import {User} from "../models/user.model";
import jwt from 'jsonwebtoken';
import {APP_SECRET} from "../constants/environment.constant";


export const login = (req: any, res: any) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).json({
            message: 'Either email or password is missing'
        })
    }

    const user = USERS.find((user: User) => user.email === email && user.password === password);
    if (!user) {
        return res.status(404).json({
            message: 'Email or password is wrong'
        })
    }

    const authToken = jwt.sign(
        { userId: user.id },
        APP_SECRET,
        { expiresIn: 60 * 60 * 24 * 7 }
    )

    return res.json({
        auth_token: authToken,
        user
    })
}
