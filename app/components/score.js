import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';


export default class ScoreComponent extends Component {
  @service variables;

  temp;
  @tracked count = 0;
  @tracked m = 0;
  @tracked oc = 1;
  @tracked total = 0;
  @tracked extras = 0;


  swap() //for swapping batsmen while over change (or) during odd runs
  {
    this.temp = this.variables.currentBatsman1;
    this.variables.currentBatsman1 = this.variables.currentBatsman2;
    this.variables.currentBatsman2 = this.temp;

    this.temp = this.variables.runsBatsman1;
    this.variables.runsBatsman1 = this.variables.runsBatsman2;
    this.variables.runsBatsman2 = this.temp;
  }

  overChange() {
    this.variables.runsGiven[this.variables.k] = this.variables.runsBowler1; //to update runs given by the bowler
    this.variables.wicketsTaken[this.variables.k] = this.variables.wicketsBowler1;  //to update wickets taken by the bowler
    this.variables.balls = 0; //to start the over from beginning

    this.variables.k += 1; // increment the bowler
    if (this.variables.k > 4) //suppose bowler limit reached repeat from the first bowler
    {
      this.variables.k = 0;
    }

    this.variables.currentBowler = this.variables.bowlers[this.variables.k]; //change the bowler
    this.variables.runsBowler1 = this.variables.runsGiven[this.variables.k]; //set runs given to current bowler
    this.variables.wicketsBowler1 = this.variables.wicketsTaken[this.variables.k];  //set wickets taken to current bowler
  }


  @action
  checkBall(value)  //for checking the type of ball
  {
    if (value == 'n') //no ball
    {
      this.variables.tob = 'n';
      this.variables.score += 1;
      this.total += 1;
      this.extras += 1;
    }

    else if (value == 'w')  //wide ball
    {
      this.variables.tob = 'w';
      this.variables.score += 1;
      this.total += 1;
      this.extras += 1;
    }
    else if (value == 'c')    //correct ball
    {
      this.variables.tob = 'c';
    }
  }


  @action
  runs(value) {
    //Checking whether overs are completed
    if (this.variables.over == this.variables.totalOvers || this.variables.wicketsGone > 9) {
      if (this.count == 0) {
        this.count++;
        this.variables.overlist.pushObject(this.oc);
        while (this.m < 6 && this.m != 0) {
          this.variables.b[this.m] = '-';
          this.m++;
        }
        this.variables.t[0] = this.total;
        this.variables.e[0] = this.extras;
        
      }
      alert("game lost!!");
      this.variables.bestBowler = this.ManOftheMatch2();
    }


    //Checking whether required runs reached
    else if (this.variables.score >= this.variables.runsNeeded) {
      if (this.count == 0) {
        this.count++;
        this.variables.overlist.pushObject(this.oc);
        while (this.m < 6 && this.m != 0) {
          this.variables.b[this.m] = '-';
          this.m++;
        }
        this.variables.t[0] = this.total;
        this.variables.e[0] = this.extras;

      }
      alert("game won!!");
      this.ManOftheMatch1();
    }

    //Checking wickets gone is less than 9
    else {
      if (this.variables.tob == 'c') {
        this.variables.balls++;     //Incrementing the no. of balls
      }
      if (this.variables.tob == 'n' || this.variables.tob == 'w') {
        this.variables.extraRuns.pushObject(value);     //Incrementing the no. of balls
      }
      if (this.variables.balls > 6)   //For changing to next over if no. of balls is 6
      {
        this.swap();
        this.variables.overlist.pushObject(this.oc);
        this.oc++;
        this.variables.currentBall++; //for mentioning over..
        console.log(this.variables.extraRuns);
        this.variables.t[0] = this.total;
        this.total = 0;
        this.variables.e[0] = this.extras;
        this.extras = 0;
        this.overChange();
      }
      //Score calculation
      else {
        this.variables.b[this.m] = value;
        this.m++;
        if (this.m > 5) {
          this.m = 0;
        }
        if (value == 'out') {
          this.variables.outList.pushObject(this.variables.currentBatsman1);
          this.variables.i += 1;
          if (this.variables.batsmen[this.variables.i] == this.variables.currentBatsman1 || this.variables.batsmen[this.variables.i] == this.variables.currentBatsman2) {
            this.variables.i += 1;
          }

          if (this.variables.tob == 'c') {
            this.variables.over = this.variables.forOver[(this.variables.balls) - 1] + this.variables.currentBall;
            this.variables.currentBatsman1 = this.variables.batsmen[this.variables.i];
            this.variables.runsBatsman1 = this.variables.runsTaken[this.variables.i];
            this.variables.wicketsGone += 1;
            this.variables.wicketsBowler1 += 1;
          }
        }

        else {
          this.total += value;  //for displaying over total
          if (this.variables.tob == 'c') {
            this.variables.over = this.variables.forOver[(this.variables.balls) - 1] + this.variables.currentBall;//for mentioning over
          }

          //for main score
          this.variables.score += value;
          this.variables.runsBatsman1 += value; //for changing current batsman runs
          this.variables.runsTaken[this.variables.i] = this.variables.runsBatsman1; //to update the original value
          this.variables.runsBowler1 += value;  //for changing runs given by current bowler

          //for swapping batsmen
          if (value == 1 || value == 3) {
            this.swap();
          }
        }
      }
    }
  }

  @action
  checkOut(value) {
    for (var n = 0; n < 10; n++) {
      if (this.variables.outList[n] == value) {
        return false;
      }
    }
    return true;
  }

  @action
  selectBatsman1(value) //for selecting batsman 1
  {
    if (this.variables.currentBatsman1 != value && this.variables.currentBatsman2 != value && this.checkOut(value)) //to check whether selected batsman is not  same as the current batsmen
    {
      for (this.variables.h = 0; this.variables.h < 11; this.variables.h++)   //to update the runs taken by current batsman before changing
      {
        if (this.variables.batsmen[this.variables.h] == this.variables.currentBatsman1) {
          this.variables.runsTaken[this.variables.h] = this.variables.runsBatsman1;
        }
      }

      this.variables.currentBatsman1 = value; //changing the selected batsman

      for (this.variables.h = 0; this.variables.h < 11; this.variables.h++) {
        if (this.variables.batsmen[this.variables.h] == this.variables.currentBatsman1) //setting the runsTaken value for currentBatsman
        {
          this.variables.runsBatsman1 = this.variables.runsTaken[this.variables.h];
          this.variables.i = this.variables.h;
        }
      }

    }
  }

  @action
  selectBatsman2(value)   //for selecting batsman 2
  {
    if (this.variables.currentBatsman1 != value && this.variables.currentBatsman2 != value && this.checkOut(value)) {
      for (this.variables.h = 0; this.variables.h < 11; this.variables.h++) {
        if (this.variables.batsmen[this.variables.h] == this.variables.currentBatsman2) {
          this.variables.runsTaken[this.variables.h] = this.variables.runsBatsman2;
        }
      }
      this.variables.currentBatsman2 = value;
      for (this.variables.h = 0; this.variables.h < 11; this.variables.h++) {
        if (this.variables.batsmen[this.variables.h] == this.variables.currentBatsman2) {
          this.variables.runsBatsman2 = this.variables.runsTaken[this.variables.h];
          this.variables.i = this.variables.h;
        }
      }
    }
  }

  @action
  ManOftheMatch1() {
    var maxRuns = Math.max(...this.variables.runsTaken);
    for (this.m = 0; this.m < 11; this.m++) {
      if (this.variables.runsTaken[this.m] == maxRuns) {
        this.variables.bestBatsman = this.variables.batsmen[this.m];
      }
    }
  }
}




