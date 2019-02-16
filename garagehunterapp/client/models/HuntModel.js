
function HuntModel(account){
    let self = this;
    self.id = account.id;
    self.address = account.address;
    self.longitude = account.longitude;
    self.latitude = account.latitude;
    self.Account_id = account.Account_id;
    self.start_datetime = account.start_datetime;
    self.end_datetime = account.end_datetime;
    self.active = account.active;

}


module.exports = HuntModel;
