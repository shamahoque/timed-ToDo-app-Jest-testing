'use strict';
const $ = require('jquery');
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
})

it('displays disabled done button css when task complete button clicked', () => {
    $('li:last-child .complete').click()

    expect($('li:last-child .complete').hasClass('done')).toBe(true);
    expect($('li:last-child .complete').prop('disabled')).toBe(true); 
})

it('hides start button when task done', () => {
    $('li:last-child .complete').click()

    expect($('ul li:last-child .startBtn').css('display')).toEqual('none')
})

it('hides time when task done by click', () => {
    $('ul li:last-child .startBtn').click()
    jest.advanceTimersByTime(60000);
    $('li:last-child .complete').click()

    expect($('ul li:last-child .taskTime').css('display')).toEqual('none')
})