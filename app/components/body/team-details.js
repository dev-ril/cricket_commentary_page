import Component from '@glimmer/component';
import { action } from '@ember/object';
import EmberResolver from 'ember-resolver';
import { inject as service } from '@ember/service';

export default class BodyTeamDetailsComponent extends Component {
    @service variables;
    @action
    showBody() {
        this.variables.isExpanded = true;
    }
}
 



