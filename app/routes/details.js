import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class DetailsRoute extends Route {
  @service store;

  async model(params) {
    try {
      return await this.store.findRecord('aanduidingsobject', params.id);
    } catch (err) {
      if (err.errors?.[0]?.status !== '404') {
        console.error('Unknown error finding object', err);
      }
      return false;
    }
  }
}
