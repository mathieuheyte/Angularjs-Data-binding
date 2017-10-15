var app = angular.module("app", []);
app.controller("MyController", ['$scope', function ($scope) {
    $scope.userInfo = [
        {
            'fistname': 'Jean',
            'lastname': 'Bono',
            'email': 'jeanbono@gmail.com'
        },
        {
            'fistname': 'John',
            'lastname': 'Duff',
            'email': 'johnduff@gmail.com'
        }];

    $scope.addNew = function (userInfo) {
        $scope.userInfo.push({
            'fistname': userInfo.fistname,
            'lastname': userInfo.lastname,
            'email': userInfo.email,
        });
        $scope.PD = {};
    };

    $scope.remove = function () {
        var newDataList = [];
        $scope.selectedAll = false;
        angular.forEach($scope.userInfo, function (selected) {
            if (!selected.selected) {
                newDataList.push(selected);
            }
        });
        $scope.userInfo = newDataList;
    };

    $scope.checkAll = function () {
        if (!$scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.userInfo, function (userInfo) {
            userInfo.selected = $scope.selectedAll;
        });
    };

}]);