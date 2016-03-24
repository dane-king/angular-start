(function() {
  angular.module('candidatePortal')
  .directive('portfolioSection',function(){
      console.log('in directive');
      return {
        restrict:'E',
        template:'<div class="col-md-4">' +
                        '<h4>Interests</h4>' +
                        '<p ng-repeat="interest in candidate.interests">{{interest}}</p>' +
                     '</div>'
      };
  });
})();
