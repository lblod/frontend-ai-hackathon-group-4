import Component from '@glimmer/component';
import { tracked } from 'tracked-built-ins';
import { action } from '@ember/object';
import { restartableTask, timeout } from 'ember-concurrency';
import { trackedTask } from 'reactiveweb/ember-concurrency';

// TODO move somewhere
async function searchForMonument(search) {
  const result = await fetch(
    `https://inventaris.onroerenderfgoed.be/aanduidingsobjecten?tekst=${search}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    }
  );
  if (result.ok) {
    return result.json();
  }
  return [];
}

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
