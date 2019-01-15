import angular from 'angular';
import React from 'react';

const {react2angular} = require('react2angular');
const {angular2react} = require('angular2react');

let $injector;
const ngHelloModule = angular.module('helloModule', [])
  .run(['$injector', function (_$injector) {
    $injector = _$injector
  }]);
// trigger the `.run()` above to initialize `$injector`
angular.bootstrap(document.createElement('div'), [ngHelloModule.name])

console.log('$injector:', $injector);

export const HelloComponent = {
  template: `<div>Angular: <input type="text" ng-model="$ctrl.message" ng-change="$ctrl.onMessageChange($ctrl.message)">{{message}}</div>`,
  bindings: {
    message: '<',
    onMessageChange: '<'
  }
};


// ngHelloModule.component('helloComponent', AngularAgainHelloComponent)
ngHelloModule.controller('HelloController', ($scope) => {
  $scope.message = 'hello!';
  $scope.onMessageChange = (message) => {
    console.log(`Message changed to ${message}`)
  }
});


ngHelloModule.component('helloComponent', HelloComponent)

const ReactHelloComponent = angular2react('helloComponent', HelloComponent, $injector)
const AngularAgainHelloComponent = react2angular(ReactHelloComponent, ['message', 'onMessageChange']);

console.log(AngularAgainHelloComponent)

ngHelloModule.component('helloAgainComponent', AngularAgainHelloComponent)

export default ngHelloModule;



