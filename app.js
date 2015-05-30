(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function() {
    this.products = gems;
  });
  
  app.controller('PanelController', function(){
	  this.tab = 1;
	  
	  this.selectTab = function(index){
		  this.tab = index;
	  };
	  
	  this.isSelected = function(index){
		  return this.tab === index;
	  };
	  
  });

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

  var gems = [{
    name: 'Azurite',
    description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
    shine: 8,
    price: 110.50,
    rarity: 7,
    color: '#CCC',
    faces: 14,
    images: [ ],
	reviews : [{
		stars : 5,
		body : 'I love this product!',
		author : 'joe@thomas.com'
	}
	]
  }, {
    name: 'Bloodstone',
    description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
    shine: 9,
    price: 22.90,
    rarity: 6,
    color: '#EEE',
    faces: 12,
    images: [
      "images/gem-01.gif",
      "images/gem-03.gif",
      "images/gem-04.gif"
    ]
  }, {
    name: 'Zircon',
    description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
    shine: 70,
    price: 1100,
    rarity: 2,
    color: '#000',
    faces: 6,
    images: [
      "images/gem-06.gif",
      "images/gem-07.gif",
      "images/gem-09.gif"
    ]
  }];
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