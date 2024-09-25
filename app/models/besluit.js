import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class BesluitModel extends Model {
  @attr title;
  @attr download;
  @attr besluitUri;
  @belongsTo('aanduidingsobject', {
    async: true,
    inverse: 'besluiten',
  })
  aanduidingsobject;

  @hasMany('annotation', {
    async: true,
    inverse: null,
  })
  annotations;
}
