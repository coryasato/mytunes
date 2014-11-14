// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!

  tagName: 'div',

  className: 'queue-entry',

  events: {
    'click': function() {
      this.model.dequeue();
    }
  },

  template: _.template('<div class="queue-artist">(<%= artist %>)<span class="breaker"></span><%= title %></div>'),

  render: function(){
    // console.log('rendering sqEntryView')
    return this.$el.html(this.template(this.model.attributes));
  }

});
