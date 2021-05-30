import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class VariablesService extends Service {

    @tracked isExpanded = false;

    //variables for team-details
    @tracked button1 = "Start Game";
    battingTeam = "Chennai Super Kings";
    runsNeeded = 100;
    totalOvers = 10;

    //variables for score-details
    @tracked balls = 0;
    @tracked score = 0;
    @tracked wicketsGone = 0;

    //iterator variables
    @tracked i = 0;
    @tracked j = 1;
    @tracked k = 0;
    @tracked h = 0;

    //variables for batsmen
    @tracked batsmen = ['Ruturaj Gaikwad', 'Faf du Plessis', 'Moeen Ali', 'Suresh Raina', 'Ambati Rayudu', 'Ravindra Jadeja', 'MS Dhoni', 'Sam Curran', 'Dwayne Bravo', 'Shardul Thakur', 'Deepak Chahar'];
    @tracked runsTaken = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    @tracked outList = [];
    @tracked currentBatsman1 = this.batsmen[this.i];
    @tracked runsBatsman1 = this.runsTaken[this.i];
    @tracked currentBatsman2 = this.batsmen[this.j];
    @tracked runsBatsman2 = this.runsTaken[this.j];

    //variables for bowlers
    @tracked bowlers = ['Ravindra Jadeja', 'Sam Curran', 'Dwayne Bravo', ' Shardul Thakur', ' Deepak Chahar'];
    @tracked runsGiven = [0, 0, 0, 0, 0];
    @tracked wicketsTaken = [0, 0, 0, 0, 0];
    @tracked currentBowler = this.bowlers[this.k];
    @tracked runsBowler1 = this.runsGiven[this.k];
    @tracked wicketsBowler1 = this.wicketsTaken[this.k];

    //variables for overs
    @tracked over = 0;
    @tracked forOver = [0.1, 0.2, 0.3, 0.4, 0.5, 1];
    @tracked currentBall = 0;

    //for mentioning type of ball
    @tracked tob = 'c';

    //for overs table
    @tracked overlist = [];
    @tracked b = [];
    @tracked e = [0];
    @tracked t = [0];
    @tracked extraRuns =[];

    //for man of the match
    @tracked bestBatsman;
    @tracked bestBowler;

}