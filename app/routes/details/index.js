import Route from '@ember/routing/route';
import { SUMMARY_ANNOTATION_ID } from '../../utils/constants';

export default class DetailsIndexRoute extends Route {
  async model() {
    const object = this.modelFor('details');
    const decisions = await object.decisions;

    const decisionWithSummary = await Promise.all(
      decisions.map(async (decision) => {
        const annotations = await decision.annotations;
        const summary = annotations.find(
          (annotation) => annotation.type.id === SUMMARY_ANNOTATION_ID
        );
        return {
          decision,
          summary,
        };
      })
    );
    return decisionWithSummary;
  }
}
