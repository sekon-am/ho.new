angular.module('hoc', [])
    .controller('AquaCatalog',['$scope',function($scope){
        $scope.aquatypes = {
            common:'Стандарт',
            commonplus:'Стандарт Плюс',
            cylinder:'Цилиндр',
            semicylijndr:'Полуцелдиндр',
            arc:'Арка',
            segment:'Сегмент',
            mix:'Микс',
        };
        $scope.aquatype = {
            value:'common',
        }
        $scope.aquaprototype = {
        };
        $scope.aquas = {};
    }]);