import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';


export default class ScoreTableRowComponent extends Component {
    @service variables;
    iterator = 0;

    @action 
    changeOver()
    {
        if(this.variables.t != '-')
        {
            addRow();
        }
    }
    @action
    addRow()
    {
        this.iterator ++;
        this.variables.isTrue[this.iterator] = true;
    }
}
