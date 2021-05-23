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

    this.t = this.variables.runsBatsman1;
    this.variables.runsBatsman1 = this.variables.runsBatsman2;
    this.variables.runsBatsman2 = this.t;
  }

  overChange() {
    this.variables.balls = 0;
    this.variables.k += 1;
    if (this.variables.k > 4) {
      this.variables.k = 0;
    }
  }

  @action
  checkBatsman1(batsman)
  {
    if(this.variables.currentBatsman1==batsman)
    {
     this.variables.isTrue = false;
    }
    else{
      this.variables.isTrue = true;
    }
  }

  @action
  checkBatsman2(batsman)
  {
    if(this.variables.currentBatsman2==batsman)
    {
     this.variables.isTrue = false;
    }
    else{
      this.variables.isTrue = true;
    }
  }

  @action
  checkBall(value)
  {
    if(value=='c')
    {
      this.variables.tob = 1;
    }
    else if(value=='n')
    {
      this.variables.tob = 2;
    }
    else if(value=='w')
    {
      this.variables.tob = 3;
    }
  }

  @action
  runs(value) {
    if (this.variables.over == this.variables.overs) {
      alert("game lost!!");
    }
    else if (this.variables.score >= this.variables.runsNeeded) {
      alert("game won!!");
    }
    else if (this.variables.noOfWickets < 9) {
        this.variables.balls++;
        if (this.variables.balls > 6) {
          this.variables.currentBall++;
          this.l = 0;
          this.overChange();
          this.swap();
        }
        else {
          this.variables.b[this.variables.balls] = value;
          this.variables.over = this.variables.forOver[this.l++] + this.variables.currentBall;
          this.variables.score += value;
          this.variables.runsBatsman1 += value;
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
      if (this.variables.balls > 6) {
        this.variables.currentBall++;
        this.l = 0;
        this.overChange();
      }
      else {
        this.variables.i += 1;
        if(this.variables.batsmen[this.variables.i] == this.variables.currentBatsman1 || this.variables.batsmen[this.variables.i] == this.variables.currentBatsman2)
        {
          this.variables.i += 1;
        }
        this.variables.over = this.variables.forOver[this.l++] + this.variables.currentBall;
        this.variables.currentBatsman1 = this.variables.batsmen[this.variables.i];
        this.variables.runsBatsman1 = this.variables.runsTaken[this.variables.i];
        this.variables.noOfWickets += 1;
      }
    }
  }
}