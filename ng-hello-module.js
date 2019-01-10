import angular from 'angular';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactHello from './react-hello.jsx';

const ngHelloModule = angular.module('helloModule', []);

ngHelloModule.directive('helloDirective', function () {
  return {
    controller: function ($scope) {
      $scope.message = 'Hello';
    },
    template: `<div>
<div>Angular: <input type="text" ng-model="message" ng-change="onMessageChange(message)"></div>
<div class="react-app"></div>
</div>`,
    link: function ($scope, $element, $attrs) {
      function renderReact(message) {
        console.log('> renderReact')
        const reactRoot = $element[0].querySelector('.react-app');
        ReactDOM.render(<ReactHello message={message} onMessageChange={(message) => {
          console.log('message:', message)
          $scope.message = message;
          $scope.$apply();
          renderReact($scope.message);
        }}/>, reactRoot);
      }

      renderReact($scope.message);
      $scope.onMessageChange = (message) => renderReact(message)
    }
  }
});
