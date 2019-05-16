const $ = require('jquery');
const updateCount = require('./task-count.js');

function doneTask(task){
    $('.complete', task).toggleClass('notDone done')
    $('.complete', task).prop("disabled",true)
    $('.startBtn', task).hide()
    $('.taskTime', task).hide()
    updateCount()
}

module.exports = doneTask;