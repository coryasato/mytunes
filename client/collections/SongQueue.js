// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  model: SongModel,

  localStorage: new Backbone.LocalStorage('playlist'),

  initialize: function(){

    // TODO: ONLY FETCH AND SAVE FROM LOCALSTORAGE, USE HOT-SONGQUEUE FOR EVERYTHING ELSE
    this.on('add', function(song) {
      // console.log('sq heard an add event')
      if (this.length === 1) {
        this.playFirst();
      }
      this.push(song);
      this.localStorage.create(song);
    }, this);

    this.on('ended', function(song) {
      this.remove(song);
      this.localStorage.destroy(song);
      // console.log('sq heard an ended event')
      if (this.length) {
        this.playFirst();
      }
    }, this);

    this.on('enqueue', function(song) {
      // console.log('sq got enqueue event')
      this.localStorage.create(song);
      this.push(song);
      // song.save();
    }, this);

    this.on('dequeue', function(song) {
      // console.log('sq heard a dequeue event')
      this.remove(song);
      this.localStorage.destroy(song);
    }, this);

  },

  playFirst: function() {
    this.first().play();
  },

});
