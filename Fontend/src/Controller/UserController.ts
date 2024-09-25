import { UserModel } from "../Model/UserModel";
import { UserSevice } from "../Sevice/UserSevice";

export class UserController{
    static async addUser(data:UserModel){
        try{
            const reponse = await UserSevice.addUser(data);
            return reponse;
        }catch(err){
            console.log(err);
        }
    } 
}