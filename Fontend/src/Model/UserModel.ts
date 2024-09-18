export class UserModel{
    id: string;
    account: string;
    password: string;
    phone: string;
    address: string;

    constructor(id: string = "", account: string = "", password: string = "", phone: string = "", address: string = ""){
        this.id = id;
        this.account = account;
        this.password = password;
        this.phone = phone;
        this.address = address;
    }
}