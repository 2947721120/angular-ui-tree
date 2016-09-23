(function () {
  'use strict';

  angular.module('demoApp')
    .controller('CloningCtrl', ['$scope', function ($scope) {
      $scope.remove = function (scope) {
        scope.remove();
      };

      $scope.toggle = function (scope) {
        scope.toggle();
      };

      $scope.newSubItem = function (scope) {
        var nodeData = scope.$modelValue;
        nodeData.nodes.push({
          id: nodeData.id * 10 + nodeData.nodes.length,
          title: nodeData.title + '.' + (nodeData.nodes.length + 1),
          nodes: []
        });
      };

      $scope.tree1 = [{
        'id': 1,
        'title': '树1 - 项目1',
        'nodes': []
      }, {
        'id': 2,
        'title': '树1 - 项目2',
        'nodes': []
      }, {
        'id': 3,
        'title': '树1 - 项目3',
        'nodes': []
      }, {
        'id': 4,
        'title': '树1 - 项目4',
        'nodes': []
      }];
      $scope.tree2 = [{
        'id': 1,
        'title': '树2 - 项目1',
        'nodes': []
      }, {
        'id': 2,
        'title': '树2 - 项目2',
        'nodes': []
      }, {
        'id': 3,
        'title': '树2 - 项目3',
        'nodes': []
      }, {
        'id': 4,
        'title': '树2 - 项目4',
        'nodes': []
      }];
    }]);

}());
