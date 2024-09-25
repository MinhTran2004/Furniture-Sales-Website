import { UserModel } from "../Model/UserModel";

export const addUser = (data:UserModel) => ({
    type: "AddUser",
    payload: data,
})
