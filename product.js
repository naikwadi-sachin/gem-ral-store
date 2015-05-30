(function(){
    var app = angular.module('store-products',[]);

    app.directive('productTitle', function(){
        return {
          restrict : 'A',
          templateUrl : 'product-title.html'
        };
      });

      app.directive('productPanels', function(){
        return{
          restrict : 'E',
          templateUrl : 'product-panels.html',
          controller : function(){
                       	  this.tab = 1;

                       	  this.selectTab = function(index){
                       		  this.tab = index;
                       	  };

                       	  this.isSelected = function(index){
                       		  return this.tab === index;
                       	  };

                         },
          controllerAs : 'panel'
        }
      });
})();