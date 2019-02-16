
function Account(account){
    let self = this;
    self.id = account.id;
    self.displayName = account.name;
    self.email = account.email;
    self.profile_pic = account.profile_pic;
    self.name = account.name;
    self.sessionId = account.sessionId;
}


module.exports = Account;
