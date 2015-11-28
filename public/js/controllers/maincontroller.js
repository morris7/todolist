/**
 * Created by sam morris on 16/11/2015.
 */

app.controller('MainController', ['$scope', '$http', function($scope, $http) {

    $scope.task = {
        name: '',
        date: '',
        complete: false
    };

    $scope.tasks = [];
    $scope.completedTasks = [];

    // when landing on the page, get all todos and show them
    $http.get('/api/todos')
        .success(function(data) {
            $scope.tasks = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    $scope.createTodo = function(task) {
        $http.post('/api/todos', task)
            .success(function(data) {
                $scope.formReset() // clear the form so our user is ready to enter another
                $scope.tasks = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // delete a todo after checking it
    $scope.deleteTodo = function(id) {
        $http.delete('/api/todos/' + id)
            .success(function(data) {
                $scope.tasks = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $scope.update = function(task) {

        $scope.tasks.push(angular.copy(task));
        $scope.formReset();

    };

    $scope.formReset = function() {

        $scope.form.$setUntouched();
        $scope.task.name = null;
        $scope.task.date = null;

    };

    $scope.markComplete = function() {



    };

}]);