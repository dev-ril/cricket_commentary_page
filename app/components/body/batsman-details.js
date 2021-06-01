import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';


export default class BodyBatsmanDetailsComponent extends Component {
    @service variables;
    @action
    checkOut(value)
    {
        for(i=0;i<11;i++)
        {
            if(value==this.variables.outlist[i])
            {
                return false;
            }
        }
        return true;
    }
}
