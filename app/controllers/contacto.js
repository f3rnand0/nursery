import Ember from 'ember';

export default Ember.Controller.extend({
  mailProcessFailed: false,
  isProcessing: false,

  actions: {
    sendEmail: function() {
      this.setProperties({
        mailProcessFailed: false,
        isProcessing: true
      });
      $.post("https://script.google.com/macros/s/AKfycbxYjklCoTsUEMDegOO6U2zwJubaVZlrDg-JivTGz0jusXsxaM3F/exec", {
        name: this.get("name"),
        email: this.get("email"),
        subject: this.get("subject"),
        message: this.get("message")
      }).then(function() {
        this.set("isProcessing", false);
        document.location = "/contacto";
        //window.alert('Correo enviado.');
      }.bind(this), function() {
        this.set("isProcessing", false);
        this.set("mailProcessFailed", true);
      }.bind(this));
    }
  }
});
