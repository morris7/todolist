/**
 * Created by sam morris on 16/11/2015.
 */

var app = angular.module("todoListApp", [])
    .directive('todo', function () {
        return {
            restrict: 'EA',
            templateUrl:'directives/task.html'
        };
    });