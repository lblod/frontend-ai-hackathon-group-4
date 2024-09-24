import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class DetailsSuggestionsRoute extends Route {
  @service store;
  async model() {
    const annotationType = await this.store.findRecord(
      'annotation-type',
      'e2d9bd23-e478-411b-a461-ad2fe9b13e30'
    );
    const suggestion1 = this.store.createRecord('annotation', {
      body: 'Suggestion 1',
      created: new Date(),
      motivation: 'suggesting',
      annotationType,
    });
    await suggestion1.save();
    const suggestion2 = this.store.createRecord('annotation', {
      body: 'Suggestion 2',
      created: new Date(),
      motivation: 'suggesting',
      annotationType,
    });
    await suggestion2.save();

    return [suggestion1, suggestion2];
  }
}
