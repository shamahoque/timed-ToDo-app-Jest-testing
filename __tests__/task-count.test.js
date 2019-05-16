'use strict'
const $ = require('jquery')
jest.useFakeTimers()
describe('displayed count of tasks left', () => {
    beforeAll(() => {
        // Set up our document body
        document.body.innerHTML =
        '<div>' +
        '  <input id="addTask" type="text" placeholder="Add a task ..."/>' +
        '  <ul> </ul>' +
        '  <div><span id="count">0</span> tasks left to do</div>' +
        '</div>'

        require('../scripts/task-add')
        $('#addTask').val('Task 1')
        var e = $.Event('keypress')
        e.keyCode= 13 // enter
        $('input').trigger(e)
    })

    it('increments when new task added', () => {
        $('#addTask').val('Task 2')
        var e = $.Event('keypress')
        e.keyCode= 13; // enter
        $('input').trigger(e);

        expect($('#count').text()).toEqual("2");
    })

    it('decrements when a task is done', () => {
        $('li:last-child .complete').click()

        expect($('#count').text()).toEqual("1")
    })

    it('decrements when a task time is up', () => {
        $('li:first-child .startBtn').click()
        jest.advanceTimersByTime(303000)

        expect($('#count').text()).toEqual("0")
    })
})