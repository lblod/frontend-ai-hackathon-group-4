import Model, { attr, hasMany } from '@ember-data/model';

export default class AanduidingsobjectModel extends Model {
  @attr('string') uri;
  @attr('string') title;
  @attr('string') description;
  @attr('string') identifier;
  // TODO replace with relationship
  @attr('string') style;
  @attr('date') creation;
  // :has-one `((address :via ,(s-prefix "cidoc:P53_has_former_or_current_location")
  //                             :as "address")
  //            (concept :via ,(s-prefix "cidoc:P2_has_type")
  //                      :as "typology"))
  // :on-path "aanduidingsobjects")

  @hasMany('besluit', {
    async: true,
    inverse: 'aanduidingsobject',
  })
  besluiten;
}
