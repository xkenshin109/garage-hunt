
function Account(account){
    let self = this;

    self.displayName = account.name;
    self.id = account.id;
    self.imageURL = account.imageURL;
    self.name = account.name;
}


module.exports = Account;
