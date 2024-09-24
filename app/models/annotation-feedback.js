import Model, { attr } from '@ember-data/model';

export default class AnnotationFeedbackModel extends Model {
  @attr feedback;
  @attr rating;
  @attr('date') created;
}
