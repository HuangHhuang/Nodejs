const EventEmitter = require('events')

class MyEventEmitter extends EventEmitter{}

const event = new MyEventEmitter

event.on('play', (value) => {
    console.log(value)
})

emit('play', 'movie')