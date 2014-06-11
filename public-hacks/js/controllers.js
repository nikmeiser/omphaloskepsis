angular.module('myApp', ['ngResource']).
factory('AngularIssues', function ($resource) {
    return $resource('https://api.github.com/repos/angular/angular.js/issues/:number', {
        number: '@number'
    }, {
        getIssue: {
            method: 'GET',
            params: {
                number: 0
            }
        }
    })
}).
controller('MyCtrl1', ['$scope', 'AngularIssues', function (scope, AI) {
    scope.myData = {
        currentIssue: null,
        issueList: [],
        issueListState: 'open',
        issueListSort: 'created',
        issueListDirection: 'desc',
        issueListPage: 1
    };

    scope.setIssueList = function () {
        AI.query({
            state: scope.myData.issueListState,
            //labels: scope.myData.labels,
            sort: scope.myData.issueListSort,
            direction: scope.myData.issueListDirection
        }, function (data) {
            scope.myData.issueList = data;
        });
    };

    scope.setSort = function (sort) {
        var oldSort = angular.copy(scope.myData.issueListSort);
        scope.myData.issueListSort = sort;
        if (oldSort == sort) {
            scope.setDirection(scope.myData.issueListDirection == 'desc' ? 'asc' : 'desc');
        } else {
            scope.setDirection('desc');
        }
    };

    scope.setDirection = function (direction) {
        scope.myData.issueListDirection = direction;
        scope.setIssueList();
    };

    scope.sortClass = function (column) {
        return column == scope.myData.issueListSort && 'sort-' + scope.myData.issueListDirection;
    };

    scope.setCurrentIssue = function (number) {
        AI.getIssue({
            number: number
        }, function (data) {
            scope.myData.currentIssue = data;
        });
    };

    scope.showAll = function () {
        scope.myData.currentIssue = null;
    };

    scope.setIssueList();
}]);