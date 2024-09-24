import Model, { attr, hasMany } from '@ember-data/model';

export default class BesluitModel extends Model {
  @attr title;
  @hasMany('annotation', {
    async: true,
    inverse: null,
  })
  annotations;
}
