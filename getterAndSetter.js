var User = /** @class */ (function () {
    function User() {
        this.userid = "admin";
        this.userpass = "Password123";
    }
    Object.defineProperty(User.prototype, "_userid", {
        get: function () {
            return this.userid;
        },
        set: function (val) {
            this.userid = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "_userpassword", {
        get: function () {
            return this.userpass;
        },
        set: function (val) {
            this.userpass = val;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.userDetails = function () {
        return "userId:".concat(this.userid, " Password : ").concat(this.userpass);
    };
    return User;
}());
var userObj = new User();
console.log(userObj._userid);
userObj._userid = "kind";
console.log(userObj._userid);
console.log(userObj._userpassword);
userObj._userpassword = "Forget123";
console.log(userObj._userpassword);
