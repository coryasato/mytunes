// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  model: SongModel,

  localStorage: new Backbone.LocalStorage('playlist'),

  initialize: function(){

    // TODO: ONLY FETCH AND SAVE FROM LOCALSTORAGE, USE HOT-SONGQUEUE FOR EVERYTHING ELSE
    this.on('add', function(song) {
      // we don't need to call enqueue since our listener in AppModel will do that for us
        // when it hears an enqueue event from a song that has been clicked on w/in our library

      // this.enqueue(song);
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function(song) {
      var count = song.get('count');
      song.set('count', count += 1);
      this.playNext(song);
    }, this);

    this.on('dequeue', function(song) {
      this.dequeue(song);
    }, this);

  },

  // idGen: function() {
  //   var id = 0;
  //   return function() {
  //     return ++id;
  //   };
  // },

  enqueue: function(song) {
    // if (!song.get('id')) {
    //   song.set('id', this.idGen()())
    // }
    this.push(song);
    this.localStorage.create(song);
  },

  dequeue: function(song) {
    this.remove(song);
    this.localStorage.destroy(song);
  },

  playFirst: function() {
    this.first().play();
  },

  playNext: function(song) {
    this.remove(song);
    this.localStorage.destroy(song);
    this.playFirst();
  }

});
