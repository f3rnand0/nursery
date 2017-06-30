import Ember from 'ember';

export default Ember.Route.extend({

  /*actions: {
    /*sendEmail: function() {
      document.getElementById('thankyou_message').show();
      //window.alert('It worked.');
    }

    mailSent: false,

    sendEmail: function() {
      console.log(this.get("name"));
      this.set("mailSent", false);
      
      $.post("https://script.google.com/macros/s/AKfycbxYjklCoTsUEMDegOO6U2zwJubaVZlrDg-JivTGz0jusXsxaM3F/exec", {
        name: this.get("name"),
        email: this.get("email"),
        subject: this.get("subject"),
        message: this.get("message")
      }).then(function() {
        //console.log(this.get("name"));
        //console.log('mailSent: ' + mailSent);
        //document.getElementById('thankyou_message').show();
      }, function() {
        this.set("mailSent", true);
      }.bind(this));
      //this.transitionTo('cat');
    }
  }*/
});
