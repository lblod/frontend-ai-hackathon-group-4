import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { getMonument } from '../utils/monuments';

export default class DetailsRoute extends Route {
  @service store;

  async model(params) {
    try {
      const existing = await this.store.query('aanduidingsobject', {
        'filter[identifier]': params.id,
      });
      if (existing.length > 0) {
        return existing[0];
      } else {
        const monument = await getMonument(params.id);
        const object = this.store.createRecord('aanduidingsobject', {
          uri: monument.uri,
          title: monument.naam,
          description: monument.korte_beschrijving,
          identifier: monument.id,
          // Is there a style field?
          // style: monument.,
          creation: monument.systemfields?.created_at,
        });
        await object.save();
        return object;
      }
    } catch (err) {
      if (err.errors?.[0]?.status !== '404') {
        console.error('Unknown error finding object', err);
      }
      return false;
    }
  }
}
