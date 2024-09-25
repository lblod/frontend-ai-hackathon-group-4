import EmberRouter from '@ember/routing/router';
import config from 'frontend/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('search');
  this.route('details', { path: 'details/:id' }, function () {
    this.route('suggestions');
    this.route('allowed');
    this.route('forbidden');
    this.route('permit');
  });
});
