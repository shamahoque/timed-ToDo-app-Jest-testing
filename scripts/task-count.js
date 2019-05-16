const $ = require('jquery');

function updateCount(){
    $('#count').text($('.notDone').length)
}

module.exports = updateCount;