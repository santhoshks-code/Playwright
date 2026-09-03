class BasePage {
    constructor(name){
        this.name = name;
    }

    open(){
        console.log("[open]" + this.name);
    }
}

class AuthPage extends BasePage {
    login(user) {
        console.log("[LOGIN]  " + user);
    }
}

class AdminPage extends AuthPage {
    constructor(){
        super("Admin Panel");
    }

    manageUsers() {
        console.log("[ADMIN] Managing User");
    }
}

let admin = new AdminPage();
admin.open();
admin.login();
admin.manageUsers();
