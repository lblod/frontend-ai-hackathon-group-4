import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { SUMMARY_ANNOTATION_ID } from '../../utils/constants';

export default class DetailsSuggestionsRoute extends Route {
  @service store;
  async model() {
    const annotationType = await this.store.findRecord(
      'annotation-type',
      SUMMARY_ANNOTATION_ID
    );
    const suggestion1 = this.store.createRecord('annotation', {
      body: 'Het ministerieel besluit tot definitieve opheffing van de bescherming als dorpsgezicht van de omgeving van een gesloten hoeve in Tongeren (Rutten) is gebaseerd op het Onroerenderfgoeddecreet van 12 juli 2013 en andere wetten. De bescherming wordt opgeheven omdat de erfgoedwaarden van het beschermde goed onherstelbaar zijn aangetast of verloren gegaan. De omgeving van de hoeve is ingrijpend veranderd sinds de bescherming in 2002, met nieuwe huizen, tuinen en bebouwing. Het besluit wordt gepubliceerd in het Belgisch Staatsblad en treedt in werking op een door de Vlaamse minister van Financiën en Begroting, Wonen en Onroerend Erfgoed bepaalde datum.',
      created: new Date(),
      motivation: 'suggesting',
      annotationType,
    });
    await suggestion1.save();
    const suggestion2 = this.store.createRecord('annotation', {
      body: 'Het ministerieel besluit tot definitieve opheffing van de bescherming als dorpsgezicht van de omgeving van een gesloten hoeve in Tongeren (Rutten) is gebaseerd op het Onroerenderfgoeddecreet van 12 juli 2013 en andere wetten. De bescherming wordt opgeheven omdat de erfgoedwaarden van het beschermde goed onherstelbaar zijn aangetast of verloren gegaan. De omgeving van de hoeve is ingrijpend veranderd sinds de bescherming in 2002, met nieuwe huizen, tuinen en bebouwing. Het besluit wordt gepubliceerd in het Belgisch Staatsblad en treedt in werking op een door de Vlaamse minister van Financiën en Begroting, Wonen en Onroerend Erfgoed bepaalde datum.',
      created: new Date(),
      motivation: 'suggesting',
      annotationType,
    });
    await suggestion2.save();

    return [suggestion1, suggestion2];
  }
}
