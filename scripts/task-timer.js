const $ = require('jquery')
const doneTask = require('./task-done.js')

function startTask(task){
    $('.startBtn', task).hide()
    var taskTime = $('<span class="taskTime">').text('--:--')
    task.append(taskTime)
    startTimer(task)
}

function startTimer(task){
    var timer = 5*60, minutes, seconds
    var timeInt = setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10)
            
            minutes = minutes < 10 ? "0" + minutes : minutes
            seconds = seconds < 10 ? "0" + seconds : seconds

            $('.taskTime',task).text(minutes + ":" + seconds)

            if (--timer < 0) {
                clearInterval(timeInt)
                doneTask(task)
            }
        }, 1000)
}

module.exports = startTask