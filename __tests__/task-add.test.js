'use strict';
const $ = require('jquery')

beforeAll(() => {
    // Set up our document body
    document.body.innerHTML =
      '<div>' +
      '  <input id="addTask" type="text" placeholder="Add a task ..."/>' +
      '  <ul> </ul>' +
      '</div>';

      require('../scripts/task-add');
})

it('does not add task to list if a key other than enter is pressed', () => {
      $('#addTask').val('hello this is a new task')
      let e = $.Event('keypress');
      e.keyCode= 0; // not enter
      $('input').trigger(e);

      expect($('li:last-child .taskText').length).toEqual(0);
})

it('displays a task at the end of the list on enter key press in input', () => {
    $('#addTask').val('hello this is a new task')
    let e = $.Event('keypress');
    e.keyCode= 13; // enter
    $('input').trigger(e);

    expect($('li:last-child .taskText').text()).toEqual('hello this is a new task');
})          