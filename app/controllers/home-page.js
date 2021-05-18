import Controller from '@ember/controller';

export default Controller.extend({
  isExpanded: false,
  battingTeam: "Chennai Super Kings",
  runsNeeded: 100,
  overs: 15,
  batsmen: ['Ruturaj Gaikwad', 'Faf du Plessis', 'Moeen Ali', 'Suresh Raina', 'Ambati Rayudu', 'Ravindra Jadeja', 'MS Dhoni', 'Sam Curran', 'Dwayne Bravo', 'Shardul Thakur', 'Deepak Chahar'],
  bowler: ['Ravindra Jadeja', 'Sam Curran', 'Dwayne Bravo', ' Shardul Thakur', ' Deepak Chahar'],
  actions: {
    toggleBody() {
      this.toggleProperty('isExpanded');
    },

    addElement(){
      
    },
    zero() {

    },
    one() {

    },
    two() {

    },
    three() {

    },
    four() {

    },
    five() {

    },
    six() {

    },
    out() {

    },
  }
});