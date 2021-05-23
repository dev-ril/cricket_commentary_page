import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ScoreComponent extends Component {
  @service variables;
  temp;
  l = 0;

  swap() {
    this.temp = this.variables.currentBatsman1;
    this.variables.currentBatsman1 = this.variables.currentBatsman2;
    this.variables.currentBatsman2 = this.temp;

    this.temp = this.variables.runsTaken1;
    this.variables.runsTaken1 = this.variables.runsTaken2;
    this.variables.runsTaken2 = this.temp;
  }

  overChange() {
    this.variables.balls = 0;
    this.variables.k += 1;
    if (this.variables.k > 4) {
      this.variables.k = 0;
    }
    this.variables.currentBowler = this.variables.bowler[this.variables.k];
    this.variables.runsBowler1 = this.variables.wicketTaken[this.variables.k];
    this.variables.wicketsBowler1 = this.variables.runsGiven[this.variables.k]; 
  }

  @action
  runs(value) {
    if (this.variables.over == this.variables.overs) {
      alert("game lost!!");
    }
    else if (this.variables.score >= this.variables.runsNeeded) {
      alert("game won!!");
    }
    else {
      if (this.variables.noOfWickets < 9) {
        this.variables.balls++;
        this.variables.over = this.variables.forOver[this.l++] + this.variables.currentBall;
        if (this.variables.balls > 6) {
          this.variables.currentBall++;
          this.variables.over = this.variables.currentBall;
          this.l = 0;
          this.overChange();
          this.swap();
        }
        this.variables.score += value;
        if (value >= 4) {
          alert("Woo-Hoo!!");
        }
      }
    }

  }

  @action
  out(value) {
    if (this.variables.over == this.variables.overs || this.variables.noOfWickets > 9) {
      alert("game lost!!");
    }
    else {
      this.variables.balls++;
      this.variables.over = this.variables.forOver[this.l++] + this.variables.currentBall;
      if (this.variables.balls == 6) {
        this.variables.currentBall++;
        this.variables.over = this.variables.currentBall;
        this.l = 0;
        this.overChange();
      }
      this.variables.i += 1;
      this.variables.currentBatsman1 = this.variables.batsmen[this.variables.i];
      this.variables.noOfWickets += 1;
    }
  }
}