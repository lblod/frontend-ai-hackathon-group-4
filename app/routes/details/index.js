import Route from '@ember/routing/route';
import { SUMMARY_ANNOTATION_ID } from '../../utils/constants';

export default class DetailsIndexRoute extends Route {
  async model() {
    const object = this.modelFor('details');
    const decisions = await object.decisions;

    const decisionWithSummary = await Promise.all(
      decisions.map(async (decision) => {
        const annotations = await decision.annotations;
        let target = null;
        await Promise.all(
          annotations.map(async (annotation) => {
            const type = await annotation.annotationType;
            if (type.id === SUMMARY_ANNOTATION_ID) {
              target = annotation;
            }
          })
        );
        const summary = target;
        return {
          decision,
          summary,
        };
      })
    );
    return decisionWithSummary;
  }
}
