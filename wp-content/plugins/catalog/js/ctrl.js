angular.module('hoc', ['ngFileUpload'])
    .controller('AquaCatalog',['$scope','$http','Upload',function($scope,$http,Upload){
        $scope.aquatypes = {};
        $scope.aquaprototype = {};
        $scope.aquas = {};
        $scope.aquatype = { value: '' };
        $scope.eaqua = {
            name:'',
            a:0,
            b:0,
            h:0,
            r:0,
            d:0,
            c:0,
            price:0,
            thumb:0,
            cap:0,
            decor:0,
            txt:'',
            img:'',
        };
        $scope.labels = {
            a: 'Длина',
            b: 'Ширина',
            h: 'Высота',
            r: 'Радиус',
            d: 'Диаметр',
            c: 'Выступ'
        };
        $scope.imgpreview = {
            url:'',
        }
        
        $http.get('index.php?hocsrv=aquatypes').success(
            function(data){
                $scope.aquatypes = data;
                $scope.aquatype.value = 'common';
                getSizes();
            }
        );

        function getSizes() {
            $http.get('index.php?hocsrv=aquasizes&aquatype=' + $scope.aquatype.value).success(
                function(data){
                    $scope.aquaprototype = data.aquaprototype;
                    $scope.aquas = data.aquas;
                }
            );
        }
        
        $scope.getsizes = getSizes;
        $scope.edit = function(id) {
            
        }
        $scope.add = function() {
            
        }
        $scope.$watch('image', function () {
            if ($scope.image) {
                Upload.upload({
                    url: 'index.php?hocsrv=aquaimgupload',
                    file: $scope.image
                }).success(function (data) {
                    $scope.eaqua.img = data.file;
                    $scope.imgpreview.url = data.url;
                });
            }
        });
    }]);