Hodor.Hodor0Controller = Ember.Controller.extend({
  isContentShowing: false,

  actions: {
    showContent: function() {
      this.set('isContentShowing', true);
    },
    hideContent: function() {
      this.set('isContentShowing', false);
    }
  }

});
