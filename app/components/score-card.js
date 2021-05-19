import Component from '@glimmer/component';

export default class ScoreCardComponent extends Component {
    score = 0;//current score
    noOfWickets = 0;//no of wickets gone
    over = 0;
    batsmen = ['Ruturaj Gaikwad', 'Faf du Plessis', 'Moeen Ali', 'Suresh Raina', 'Ambati Rayudu', 'Ravindra Jadeja', 'MS Dhoni', 'Sam Curran', 'Dwayne Bravo', 'Shardul Thakur', 'Deepak Chahar'];//batsmen line-up
    bowler = ['Ravindra Jadeja', 'Sam Curran', 'Dwayne Bravo', ' Shardul Thakur', ' Deepak Chahar'];//bowlers line-up
    runsTaken = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//runs of individual batsmen
    runsGiven = [0, 0, 0, 0, 0];//runs given by individual bowlers
    wicketsTaken = [0, 0, 0, 0, 0];//wickets taken by individual bowlers
}
