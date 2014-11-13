// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  model: SongModel,

  initialize: function(){
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function(song) {
      // TODO: REFACTOR TO NOT ONLY REMOVE THE FIRST SONG IN COLLECTION
      this.remove(song);
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(song) {
      this.remove(song);
    }, this)
  },

  playFirst: function() {
    // console.log('again', this.shift())
    this.at(0).play();
  }

});
