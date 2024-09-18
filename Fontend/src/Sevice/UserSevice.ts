import { UserModel } from "../Model/UserModel";
import axios from "axios";

export class UserSevice{
    static async addUser(data: UserModel){
        try{
            await axios.post('http://localhost:5000/user/addUser', data).then((data) => console.log(data));
        }catch(err){
            console.log(err);
        }
    }
}