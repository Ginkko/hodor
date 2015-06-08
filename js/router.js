Hodor.Router.map(function() {
  this.resource('hodor0', {path: '/'}, function() {
    this.resource('content0');
    this.resource('content1');
  });
  this.resource('hodor1');
  this.resource('hodor2');
});
