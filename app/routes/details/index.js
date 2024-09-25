import Route from '@ember/routing/route';

export default class DetailsIndexRoute extends Route {
  async model() {
    const object = this.modelFor('details');
    const decisions = await object.decisions;
    return decisions;
  }
}
