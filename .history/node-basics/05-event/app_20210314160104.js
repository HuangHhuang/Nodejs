const EventEmitter = require('events')
const { emit } = require('node:process')

class MyEventEmitter extends EventEmitter{}

const event = new MyEventEmitter

event.on('play', (value) => {
    console.log(value)
})

emit('play', 'movie')