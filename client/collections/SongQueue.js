// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  model: SongModel,

  initialize: function(){
    this.on('add', function(song) {
      if (this.length === 1) {
        this.playFirst();
      }
      this.push(song);
      console.log(this);
    }, this);

    this.on('ended', function(song) {
      this.remove(song);

      if (this.length) {
        this.playFirst();
      }
    }, this);

    this.on('enqueue', function(song) {
      this.push(song);
    }, this);

    this.on('dequeue', function(song) {
      this.remove(song);
    }, this);

  },

  playFirst: function() {
    this.at(0).play();
  }

});
