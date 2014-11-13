// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!

  tagName: 'div',

  events: {
    'click': function() {
      this.model.dequeue();
    }
  },

  template: _.template('<div>(<%= artist %>)</div><div><%= title %></div>'),

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
