angular.module('hoc', [])
    .controller('AquaCatalog',['$scope','$http',function($scope,$http){
/*        $scope.aquatypes = {
            common:'Стандарт',
            commonplus:'Стандарт Плюс',
            cylinder:'Цилиндр',
            semicylijndr:'Полуцелдиндр',
            arc:'Арка',
            segment:'Сегмент',
            mix:'Микс',
        };*/
        $http.get('index.php?hocsrv=aquatypes').success(
            function(data){
                $scope.aquatypes = data;
            });
        $scope.aquatype = '';
        $scope.aquaprototype = {
            common:{
                a:true
            },
            commonplus:'Стандарт Плюс',
            cylinder:'Цилиндр',
            semicylijndr:'Полуцелдиндр',
            arc:'Арка',
            segment:'Сегмент',
            mix:'Микс',
        };
        $scope.aquas = {};
    }]);