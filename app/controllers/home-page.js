import Controller from '@ember/controller';
import EmberResolver from 'ember-resolver';

export default Controller.extend({
  isExpanded: false,
  button1: "Start Game",
  battingTeam: "Chennai Super Kings",//batting team name
  runsNeeded: 100,//total runs needed to win the match
  overs: 15,//total no of overs
  //to show the oversTable when the Start Game button is pressed
  actions: {
    toggleBody() {
      this.toggleProperty('isExpanded');
    },
  }
});

