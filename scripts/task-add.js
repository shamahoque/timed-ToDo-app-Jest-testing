const $ = require('jquery')
const updateCount = require('./task-count.js')
const doneTask = require('./task-done.js')
const startTask = require('./task-timer.js')

$('#addTask').keypress(function(e){
    if(e.keyCode == 13){
        let newTask = $('<li>')
        let taskDesc = $('<span class="taskText">').text($('#addTask').val())
        
        let startBtn = $('<button class="startBtn">Start</button>')   
        startBtn.click(function(event){
            startTask(newTask)
        })
        
        let doneBtn = $('<button class="complete notDone"></button>') 
        doneBtn.click(function(event){
            doneTask(newTask)
        })

        newTask.append(doneBtn)
        newTask.append(taskDesc)
        newTask.append(startBtn)
        $('ul').append(newTask)
        
        $('#addTask').val('')          
        updateCount()
    }
})