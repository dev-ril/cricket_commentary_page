import Controller from '@ember/controller';
import EmberResolver from 'ember-resolver';

export default Controller.extend({
  isExpanded: false,
  button1: "Start Game",
  //to show the oversTable when the Start Game button is pressed
  actions: {
    toggleBody() {
      this.toggleProperty('isExpanded');
    },
  }
});

