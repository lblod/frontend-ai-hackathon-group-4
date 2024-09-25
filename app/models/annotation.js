import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class AnnotationModel extends Model {
  @attr body;
  @attr('date') created;
  @attr motivation;
  @belongsTo('annotation-type', {
    async: true,
    inverse: null,
  })
  annotationType;
  @hasMany('annotation-feedback', {
    async: true,
    inverse: 'annotation',
  })
  feedbacks;
}
