import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';



export default class HomePageComponent extends Component {
    
    @service variables;
    @action
    showBody() {
        this.variables.isExpanded = true;
    }
    @action
    addRow()
    {
        return true;
    }
}
