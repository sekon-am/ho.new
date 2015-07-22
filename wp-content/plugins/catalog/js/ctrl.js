angular.module('hoc', ['ngFileUpload'])
    .controller('AquaCatalog',['$scope','$http','Upload',function($scope,$http,Upload){
        $scope.aquatypes = {};
        $scope.aquaprototype = {};
        $scope.aquas = {};
        $scope.aquatype = { value: '' };
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

        function emptyAqua() {
            return {
                id:0,
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
        }
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
            $scope.eaqua = emptyAqua();
        }
        $scope.save = function() {
            $http.post('index.php?hocsrv=save',{
                aqua: $scope.eaqua, 
                type: $scope.aquatype.value
            }).success(function (data) {
                if(data.result=='ok'){
                    getSizes();
                }
            });
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

        $scope.eaqua = emptyAqua();
        $http.get('index.php?hocsrv=aquatypes').success(
            function(data){
                $scope.aquatypes = data;
                $scope.aquatype.value = 1;
                getSizes();
            }
        );
    }]);