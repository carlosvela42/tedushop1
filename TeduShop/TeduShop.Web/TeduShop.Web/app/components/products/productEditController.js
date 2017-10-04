﻿(function (app) {
    app.controller('productEditController', productEditController);

    productEditController.$inject = ['$scope', 'apiService', 'notificationService', '$state', '$stateParams', 'commonService'];

    function productEditController($scope, apiService, notificationService, $state, $stateParams, commonService) {
        $scope.product = {}
        $scope.moreImages = [];
        $scope.ckeditorOptions = {
            language: 'vi',
            height: '200px'
        }

        $scope.getSeoTitle = getSeoTitle;

        function getSeoTitle() {
            $scope.product.Alias = commonService.getSeoTitle($scope.product.Name);
        }

        function loadProductDetail() {
            apiService.get('/api/product/getbyid/' + $stateParams.id, null, function (result) {
                $scope.product = result.data;                  
                $scope.moreImages = JSON.parse($scope.product.MoreImage);
            }, function (error) {
                notificationService.displayError(error.data);
            });
        }

        $scope.UpdateProduct = UpdateProduct;

        function UpdateProduct() {
            $scope.product.moreImage = JSON.stringify($scope.moreImages);
            apiService.put('/api/product/update', $scope.product, function (result) {
                notificationService.displaySuccess(result.data.Name + ' đã được cập nhật.');
                $state.go('products');
            }, function (error) {
                notificationService.displayError('Cập nhật không thành công');
            });
        }

        $scope.productCategories = [];

        function loadProductCategory() {
            apiService.get('/api/productcategory/getallparents', null, function (result) {
                $scope.productCategories = result.data;
            }, function () {
                console.log('Cannot get list parent');
            });
        }

        $scope.ChooseImage = function () {
            var finder = new CKFinder();
            finder.selectActionFunction = function (fileUrl) {                
                $scope.$apply(function () {
                    $scope.product.Image = fileUrl;
                });
            }
            finder.popup();
        }

        $scope.ChooseMoreImage = function () {
            var finder = new CKFinder();
            finder.selectActionFunction = function (fileUrl) {
                $scope.$apply(function () {
                    $scope.moreImages.push(fileUrl);
                });
            }
            finder.popup();
        }
        
        loadProductCategory();
        loadProductDetail();
    }
})(angular.module('tedushop.products'))