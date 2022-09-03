const moment = require("moment");

class MyMomentFunctions {


    static getCurrentDate() {
        return moment().format('D');
    }

    static getCurrentMomentInFormat(userFormat) {
        return moment().format(userFormat);
    }

}
module.exports = MyMomentFunctions;