
function HuntModel(account){
    let self = this;
    self.id = account.id;
    self.address = account.address;
    self.longitude = account.longitude;
    self.latitude = account.latitude;
    self.Account_id = account.Account_id;
    self.start_date = account.start_date;
    self.photo_one = account.photo_one;
    self.active = account.active;

}


module.exports = HuntModel;
