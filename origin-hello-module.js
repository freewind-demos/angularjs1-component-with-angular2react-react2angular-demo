import angular from 'angular';
import React from 'react';

export const HelloComponent = {
  template: `<div>Angular: <input type="text" ng-model="$ctrl.message" ng-change="$ctrl.onMessageChange($ctrl.message)">{{message}}</div>`,
  bindings: {
    message: '<',
    onMessageChange: '<'
  }
};

const ngHelloModule = angular.module('helloModule', [])
  .component('originHelloComponent', HelloComponent)
  .controller('HelloController', ($scope) => {
    $scope.message = 'hello!';
    $scope.onMessageChange = (message) => {
      console.log(`Message changed to ${message}`)
    }
  });

export default ngHelloModule;

