import Component from '@glimmer/component';
import { action } from '@ember/object';
import EmberResolver from 'ember-resolver';
import { inject as service } from '@ember/service';

export default class HeaderComponent extends Component {
    @service variables;
}
 