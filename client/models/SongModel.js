// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  defaults: {
    url: '',
    title: '',
    artist: '',
    count: 0
  },

  initialize: function() {
    // console.log(this.toJSON())
    this.id = md5(JSON.stringify(this.toJSON()));
    // this.id = this.attributes['_id'];
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function() {
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  },

  ended: function() {
    this.trigger('ended', this);
  }

});
