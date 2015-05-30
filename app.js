(function() {
  var app = angular.module('gemStore', ['store-products']);

  app.controller('StoreController', ['$http',function($http){

    var store = this;
    store.products = [];
    $http.get("/gem-ral store/products.json").success(function(data){
        store.products = data;
    });
  }]);

  app.controller('ReviewController', function(){
    this.review={};

    this.addReview = function(product){
//      console.log("stars="+this.review.stars);
//      console.log("body="+this.review.body);
//      console.log("author="+this.review.author);
      product.reviews.push(this.review);
      this.review={};
    };

  });




})();

function setVal(val)
{
	var current;
	if(val)
		current = val;
	else 
		current = 0;
	return current;
}