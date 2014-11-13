// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'div',

  initialize: function() {
    this.render();

    this.listenTo(this.collection, 'add remove', this.render);
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<h3>Queue</h3>').append(
      // console.log('in collection:', this)
      this.collection.map(function(song){
        // console.log('rendering full queue', song);
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
