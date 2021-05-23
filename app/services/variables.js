import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class VariablesService extends Service {
    @tracked isExpanded = false;
    @tracked isPressed = 0;
    button1 = "Start Game";
    battingTeam = "Chennai Super Kings";
    runsNeeded = 100;
    overs = 10;
    @tracked balls = 0;
    @tracked runsscore = 0;
    @tracked score = 0;
    @tracked noOfWickets = 0;
    @tracked over = 0;
    @tracked currentBall = 0;
    @tracked i = 0;
    @tracked j = 1;
    @tracked k = 0;
    @tracked row = 1;
    @tracked batsmen = ['Ruturaj Gaikwad', 'Faf du Plessis', 'Moeen Ali', 'Suresh Raina', 'Ambati Rayudu', 'Ravindra Jadeja', 'MS Dhoni', 'Sam Curran', 'Dwayne Bravo', 'Shardul Thakur', 'Deepak Chahar'];
    @tracked bowler = ['Ravindra Jadeja', 'Sam Curran', 'Dwayne Bravo', ' Shardul Thakur', ' Deepak Chahar'];
    runsTaken = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    runsGiven = [0, 0, 0, 0, 0];
    wicketsTaken = [0, 0, 0, 0, 0];
    @tracked forOver = [0.1,0.2,0.3,0.4,0.5,1];
    @tracked currentBatsman1 = this.batsmen[this.i];
    @tracked runsBatsman1 = this.runsTaken[this.i];
    @tracked currentBatsman2 = this.batsmen[this.j];
    @tracked runsBatsman2 = this.runsTaken[this.j];
    @tracked currentBowler = this.bowler[this.k];
    @tracked runsBowler1 = this.runsGiven[this.k];
    @tracked wicketsBowler1 = this.wicketsTaken[this.k];
    @tracked b = ['-','-','-','-','-','-'];
    @tracked t = '-';
    @tracked overcount = 1;
    @tracked isTrue = true;

    players= ['red', 'green', 'blue'];

    selectedColor= null;
     
}
