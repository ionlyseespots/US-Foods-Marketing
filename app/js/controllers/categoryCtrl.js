'use strict';

four51.app.controller('CategoryCtrl', function ($routeParams, $sce, $scope, $451, Category, Product) {
	$scope.productLoadingIndicator = true;
	$scope.trusted = function(d){
		if(d) return $sce.trustAsHtml(d);
	}
	Product.search($routeParams.categoryInteropID, null, null, function(products) {
        $scope.products = products;
		$scope.productLoadingIndicator = false;
    });
    if ($routeParams.categoryInteropID) {
	    $scope.categoryLoadingIndicator = true;
        Category.get($routeParams.categoryInteropID, function(cat) {
            $scope.currentCategory = cat;
	        $scope.categoryLoadingIndicator = false;
        });
    }else if($scope.tree){
		$scope.currentCategory ={SubCategories:$scope.tree};
	}

	$scope.$on("treeComplete", function(data){
		if (!$routeParams.categoryInteropID) {
			$scope.currentCategory ={SubCategories:$scope.tree};
		}
	});

    // No tooltips on phone, tablet portrait
    if (!window.matchMedia || (window.matchMedia("(min-width: 1023px)").matches)) {
        $('.fa').tooltip();
    }

	$scope.slides = ['http://www.four51.com/Themes/Custom/78ad1fd0-1ab1-4bd2-9a1a-a556f7bc77dc/MarketingStore/Banners/VAL-ADD-SVS.jpg',
		'http://www.four51.com/Themes/Custom/78ad1fd0-1ab1-4bd2-9a1a-a556f7bc77dc/MarketingStore/Banners/MO-CLEARANCE.jpg',
		'http://www.four51.com/Themes/Custom/78ad1fd0-1ab1-4bd2-9a1a-a556f7bc77dc/MarketingStore/Banners/USF-PROSPECTS.jpg'];

});