import Ember from 'ember';

export default Ember.Controller.extend({
  customOptions: {
    scrollwheel: false,
    keyboardShortcuts: false,
    mapTypeControl: false,
    rotateControl: false,
    scaleControl: false,
    streetViewControl: false
  }
});
