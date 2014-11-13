// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */

    var sq = this.get('songQueue');

    params.library.on('play', function(song){
      // console.log('heard play event', song);
      this.set('currentSong', song);
    }, this);

    params.library.on('enqueue', function(song) {
      sq.add(song);
      if (sq.length === 1) {
        // this.set('currentSong', song);
        sq.playFirst();
      }
    }, this);

    // dequeue
    sq.on('dequeue', function(song) {
      sq.remove(song);
    });

    // ended
    params.library.on('ended', function(song) {
      // console.log("Song in Appmodel: ", song);
      sq.shift(song);
    })

  }

});
