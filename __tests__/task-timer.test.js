'use strict';
const $ = require('jquery')

jest.mock('../scripts/task-done.js')
jest.useFakeTimers();

beforeAll(() => {
          // Set up our document body
          document.body.innerHTML =
          '<div>' +
          '  <input id="addTask" type="text" placeholder="Add a task ..."/>' +
          '  <ul> </ul>' +
          '</div>';

          require('../scripts/task-add');
})

beforeEach(()=>{
    $('#addTask').val('hello this is a new task')
    var e = $.Event('keypress');
    e.keyCode= 13; // enter
    $('input').trigger(e);
    $('ul li:last-child .startBtn').click()
})

it('starts timer for a task when the start button is clicked', () => {
  
    expect($('ul li:last-child .startBtn').css('display')).toEqual('none')
    expect($('ul li:last-child .taskTime').length).toEqual(1)
    expect(setInterval).toHaveBeenCalled()  
})

it('shows remaining time after a certain time has passed', () => {
    jest.advanceTimersByTime(61000);
    expect($('ul li:last-child .taskTime').text()).toEqual('04:00')

})

it('marks task as done when time up', () => {
    const doneTask = require('../scripts/task-done.js')
    jest.advanceTimersByTime(301000);
    expect($('ul li:last-child .taskTime').text()).toEqual('00:00')
    expect(clearInterval).toHaveBeenCalled()  
    expect(doneTask).toHaveBeenCalled()
})