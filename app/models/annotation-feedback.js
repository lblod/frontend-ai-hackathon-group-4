import Model, { attr, belongsTo } from '@ember-data/model';

export default class AnnotationFeedbackModel extends Model {
  @attr feedback;
  @attr('number') rating;
  @attr('date') created;
  @belongsTo('annotation', {
    async: true,
    inverse: 'feedbacks',
  })
  annotation;
}
