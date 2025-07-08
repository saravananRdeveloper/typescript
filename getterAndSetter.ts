class User{
    private userid : string = "admin";
    private userpass : string = "Password123";
    
    get _userid(){
        return this.userid;
    }
    get _userpassword(){
        return this.userpass;
    }
    set _userid(val: any){
        this.userid=val;
    }

    set _userpassword(val: any){
        this.userpass=val;
    }
    userDetails(){
        return `userId:${this.userid} Password : ${this.userpass}`
    }
}

let userObj = new User();
console.log(userObj._userid);
userObj._userid = `kind`
console.log(userObj._userid);
console.log(userObj._userpassword);
userObj._userpassword=`Forget123`
console.log(userObj._userpassword);
