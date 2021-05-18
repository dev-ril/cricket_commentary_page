import Controller from '@ember/controller';

export default Controller.extend({
  isExpanded: false,
  battingTeam: "Chennai Super Kings",
  runsNeeded: 100,
  overs: 15,
  score:0,
  noOfWickets:0,
  over:0,
  batsmen: ['Ruturaj Gaikwad', 'Faf du Plessis', 'Moeen Ali', 'Suresh Raina', 'Ambati Rayudu', 'Ravindra Jadeja', 'MS Dhoni', 'Sam Curran', 'Dwayne Bravo', 'Shardul Thakur', 'Deepak Chahar'],
  bowler: ['Ravindra Jadeja', 'Sam Curran', 'Dwayne Bravo', ' Shardul Thakur', ' Deepak Chahar'],
  runsTaken: [0,0,0,0,0,0,0,0,0,0,0],
  runsGiven: [0,0,0,0,0],
  wicketsTaken: [0,0,0,0,0],
  actions: {
    toggleBody() {
      this.toggleProperty('isExpanded');
    },
    addElement() {

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