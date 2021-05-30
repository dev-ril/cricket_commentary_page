import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class BodyTeamDetailsComponent extends Component {
    @service variables;

    @action
    showBody() {
        if(!this.variables.isExpanded){
            this.variables.isExpanded = true;
            this.variables.button1 = "End Game"
        }
        else{
            this.variables.isExpanded = false;
            this.variables.button1 = "Start Game"
        }
    }
}
 



