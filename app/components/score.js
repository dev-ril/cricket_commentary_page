import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ScoreComponent extends Component {
  @service variables;
  temp;
  l = 0;
  h = 0;
  x = 1;
  total = 0;

  swap() //for swapping batsmen while over change (or) during odd runs
  {
    this.temp = this.variables.currentBatsman1;
    this.variables.currentBatsman1 = this.variables.currentBatsman2;
    this.variables.currentBatsman2 = this.temp;

    this.t = this.variables.runsBatsman1;
    this.variables.runsBatsman1 = this.variables.runsBatsman2;
    this.variables.runsBatsman2 = this.t;
  }

  overChange() {
    this.variables.overcount++;
    this.variables.runsGiven[this.variables.k] = this.variables.runsBowler1; //to update runs given by the bowler
    this.variables.wicketsTaken[this.variables.k] = this.variables.wicketsBowler1;  //to update wickets taken by the bowler
    this.variables.balls = 0; //to start the over from beginning
    this.variables.k += 1; // increment the bowler

    if (this.variables.k > 4) //suppose bowler limit reached repeat from the first bowler
    {
      this.variables.k = 0;
    }

    // this.variables.t = this.total;
    // this.total = 0;

    this.variables.currentBowler = this.variables.bowler[this.variables.k]; //change the bowler
    this.variables.runsBowler1 = this.variables.runsGiven[this.variables.k]; //set runs given to current bowler
    this.variables.wicketsBowler1 = this.variables.wicketsTaken[this.variables.k];  //set wickets taken to current bowler
  }

  @action
  checkBall(value)  //for checking the type of ball
  {
    if (value == 'n') //no ball
    {
      this.variables.tob = 'n';   //change type of ball value to n
      this.variables.score += 1;  //add one run to score
    }
    else if (value == 'w')  //wide ball
    {
      this.variables.tob = 'w'; //change type of ball value to w
      this.variables.score += 1;  //add one run to score
    }
    else if (value == 'c')    //correct ball
    {
      this.variables.tob = 'c'; //change type of ball value to c
    }
  }

  @action
  selectBatsman1(value) //for selecting batsman 1
  {
    if (this.variables.currentBatsman1 != value && this.variables.currentBatsman2 != value) //to check whether selected batsman is not  same as the current batsmen
    {
      for (this.h = 0; this.h < 11; this.h++)   //to update the runs taken by current batsman before changing
      {
        if (this.variables.batsmen[this.h] == this.variables.currentBatsman1) {
          this.variables.runsTaken[this.h] = this.variables.runsBatsman1;
        }
      }

      this.variables.currentBatsman1 = value; //changing the selected batsman

      for (this.h = 0; this.h < 11; this.h++) 
      {
        if (this.variables.batsmen[this.h] == this.variables.currentBatsman1) //setting the runsTaken value for currentBatsman
        {
          this.variables.runsBatsman1 = this.variables.runsTaken[this.h];
          this.variables.i = this.variables.h;
        }
      }

    }
  }

  @action
  selectBatsman2(value)   //for selecting batsman 2
  {
    if (this.variables.currentBatsman1 != value && this.variables.currentBatsman2 != value) {
      for (this.h = 0; this.h < 11; this.h++) {
        if (this.variables.batsmen[this.h] == this.variables.currentBatsman2) {
          this.variables.runsTaken[this.h] = this.variables.runsBatsman2;
        }
      }
      this.variables.currentBatsman2 = value;
      for (this.h = 0; this.h < 11; this.h++) {
        if (this.variables.batsmen[this.h] == this.variables.currentBatsman2) {
          this.variables.runsBatsman2 = this.variables.runsTaken[this.h];
          this.variables.i = this.variables.h;
        }
      }
    }
  }

  @action
  runs(value) {
    //Checking whether overs are completed
    if (this.variables.over == this.variables.overs || this.variables.noOfWickets > 9) {
      alert("game lost!!");
      console.log(this.variables.outlist);
    }
    //Checking whether required runs reached
    else if (this.variables.score >= this.variables.runsNeeded) {
      alert("game won!!");
    }
    //Checking wickets gone is less than 9
    else {
      // this.variables.b[this.variables.balls] = value;
      if (this.variables.tob == 'c') {
        this.variables.balls++;     //Incrementing the no. of balls
      }

      if (this.variables.balls > 6)   //For changing to next over if no. of balls is 6
      {
        this.variables.currentBall++; //for mentioning over..
        this.l = 0;
        this.overChange();
        this.swap();
      }
      //Score calculation
      else {
        if (value == 'out') 
        {
          this.variables.outlist[this.variables.i] = 1;
          this.variables.i += 1;
          if (this.variables.batsmen[this.variables.i] == this.variables.currentBatsman1 || this.variables.batsmen[this.variables.i] == this.variables.currentBatsman2) {
            this.variables.i += 1;
          }
          if (this.variables.tob == 'c') 
          {
            this.variables.over = this.variables.forOver[this.l++] + this.variables.currentBall;
            this.variables.currentBatsman1 = this.variables.batsmen[this.variables.i];
            this.variables.runsBatsman1 = this.variables.runsTaken[this.variables.i];
            this.variables.noOfWickets += 1;
            this.variables.wicketsBowler1 += 1;
          }
        }
        else {
          // this.total += value;  //for displaying over total
          if (this.variables.tob == 'c') {
            this.variables.over = this.variables.forOver[this.l++] + this.variables.currentBall;//for mentioning over
          }
          this.variables.score += value;  //for main score 
          this.variables.runsBatsman1 += value; //for changing current batsman runs
          this.variables.runsTaken[this.variables.i] = this.variables.runsBatsman1; //to update the original value
          this.variables.runsBowler1 += value;  //for changing runs given by current bowler
          if (value == 1 || value == 3) //for swapping batsmen
          {
            this.swap();
          }
        }
      }
    }
  }
}