export class UserModel{
    _id: string;
    account: string;
    password: string;
    phone: string;
    address: string;

    constructor(id: string = "", account: string = "", password: string = "", phone: string = "", address: string = ""){
        this._id = id;
        this.account = account;
        this.password = password;
        this.phone = phone;
        this.address = address;
    }
}