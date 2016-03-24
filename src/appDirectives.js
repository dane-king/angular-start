(function() {
  angular.module('candidatePortal')
  .directive('portfolioSection',function(){
      return {
        restrict:'E',
        scope:{
          items:'=',
          header:'@'
        },
        template:'<div class="col-md-4">' +
                        '<h4>{{header}}</h4>' +
                        '<p ng-repeat="item in items">{{item}}</p>' +
                     '</div>'
      };
  });
})();
