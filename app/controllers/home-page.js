import Controller from '@ember/controller';

export default Controller.extend({
  isExpanded: false,
  button1:"Start Game",
  battingTeam: "Chennai Super Kings",//batting team name
  runsNeeded: 100,//total runs needed to win the match
  overs: 15,//total no of overs
  score:0,//current score
  noOfWickets:0,//no of wickets gone
  over:0,//current over
  batsmen: ['Ruturaj Gaikwad', 'Faf du Plessis', 'Moeen Ali', 'Suresh Raina', 'Ambati Rayudu', 'Ravindra Jadeja', 'MS Dhoni', 'Sam Curran', 'Dwayne Bravo', 'Shardul Thakur', 'Deepak Chahar'],//batsmen line-up
  bowler: ['Ravindra Jadeja', 'Sam Curran', 'Dwayne Bravo', ' Shardul Thakur', ' Deepak Chahar'],//bowlers line-up
  runsTaken: [0,0,0,0,0,0,0,0,0,0,0],//runs of individual batsmen
  runsGiven: [0,0,0,0,0],//runs given by individual bowlers
  wicketsTaken: [0,0,0,0,0],//wickets taken by individual bowlers
  
  //to show the oversTable when the Start Game button is pressed
  actions: {
    toggleBody() {
      this.toggleProperty('isExpanded');
    },
  //To add next over row when an over is completed
    addElement() {

    },
  //functions for scoreEditor
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

