import Component from '@glimmer/component';
import { tracked } from 'tracked-built-ins';
import { action } from '@ember/object';
import { restartableTask, timeout } from 'ember-concurrency';
import { trackedTask } from 'reactiveweb/ember-concurrency';
import { searchForMonument } from '../utils/monuments';

export default class SearchComponent extends Component {
  @tracked search = '';

  @action
  setSearch(event) {
    this.search = event.target.value;
  }

  doSearch = restartableTask(async () => {
    if (this.search) {
      await timeout(100);
      return await searchForMonument(this.search);
    } else {
      return false;
    }
  });
  results = trackedTask(this, this.doSearch, () => [this.search]);
}
