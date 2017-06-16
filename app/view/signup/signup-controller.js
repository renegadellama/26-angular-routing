'use strict';

const angular = require('angular');


module.exports = ['$log', function($log) {
  $log.debug('SignupController');

  this.$onInit = () => {
    this.title = 'The Sign Up, of DOOOOOM!!!';

    this.update = function(input) {
      $log.debug('#update');
      return this.say({text: input || 'SignUp', f: this.current});
    };
  };
}];
