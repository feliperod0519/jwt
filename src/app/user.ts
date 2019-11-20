export class User {
    id: number;
    name: string;
    email: string;

    constructor(id:number, name: string, email:string){
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

export class LoginUser extends User
{
    password: string;

    
    constructor(id:number, name: string, email:string, password:string)
    { 
        super(id,name,email);
        this.password = password;
    }
    
    
}
