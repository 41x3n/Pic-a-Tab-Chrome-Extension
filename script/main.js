var datetime = null;
        
var update = function () {
    // date = moment(new Date())
    datetime.html(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
};

$(document).ready(function(){
    datetime = $('#datetime')
    update();
    setInterval(update, 1000);
});