'use strict'

beforeAll(() => {
    // Set up our document body
    document.body.innerHTML =
        '<div>' +
        '  <input id="addTask" type="text" placeholder="Add a task ..."/>' +
        '  <ul> </ul>' +
        '  <div><span id="count">0</span> tasks left to do</div>' +
        '</div>'

      require('./scripts/task-add')
})