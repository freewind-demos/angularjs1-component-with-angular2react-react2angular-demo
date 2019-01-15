import angular from 'angular';
import React from 'react';
import helloModule, {HelloComponent} from './origin-hello-module';

const {react2angular} = require('react2angular');
const {angular2react} = require('angular2react');

let $injector;
angular.module('helloModule')
  .run(['$injector', function (_$injector) {
    $injector = _$injector
  }]);
// trigger the `.run()` above to initialize `$injector`
angular.bootstrap(document.createElement('div'), [helloModule.name])

const ReactHelloComponent = angular2react('originHelloComponent', HelloComponent, $injector)
const AngularAgainHelloComponent = react2angular(ReactHelloComponent, ['message', 'onMessageChange']);

helloModule.component('helloComponent', AngularAgainHelloComponent)

export default helloModule;

