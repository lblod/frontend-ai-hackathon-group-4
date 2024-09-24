import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class AiSuggestionComponent extends Component {
  @action
  onAccept() {
    console.log('good bot!');
  }
  @action
  onReject() {
    console.log('bad bot!');
  }
}
