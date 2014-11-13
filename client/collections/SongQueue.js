// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  model: SongModel,

  initialize: function(){
    this.on('add', function(song) {
      console.log('sq heard an add event')
      if (this.length === 1) {
        this.playFirst();
      }
      this.push(song);
      // console.log(this);
    }, this);

    this.on('ended', function(song) {
      this.remove(song);
      console.log('sq heard an ended event')
      if (this.length) {
        this.playFirst();
      }
    }, this);

    // TODO
    this.on('enqueue', function(song) {
      console.log('sq got enqueue event')
      this.push(song);
    }, this);

    this.on('dequeue', function(song) {
      console.log('sq heard a dequeue event')
      this.remove(song);
    }, this);

  },

  playFirst: function() {
    this.first().play();
  }

});
