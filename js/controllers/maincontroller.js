/**
 * Created by sam morris on 16/11/2015.
 */

app.controller('MainController', ['$scope', function($scope) {

    $scope.task = {
        name: '',
        date: '',
        complete: false
    };

    $scope.tasks = [];

    $scope.update = function(task) {

        $scope.tasks.push(angular.copy(task));
        $scope.task.name = null;
        $scope.task.date = null;

    };

}]);