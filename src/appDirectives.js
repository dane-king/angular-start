(function() {
  angular.module('candidatePortal')
  .directive('addItem',function(){
      return{
        scope:{
          items:'=',
          id:'@'
        },
        replace:true,
        restrict:'AE',
        template:'<div class="section_input">' +
                    '<label for="{{id}}">Add to List</label>'+
                    '<input type="text" name="{{id}}_input" id="{{id}}" placeholder="Enter a new {{id}} item"/>'+
                    '<button ng-click="add_item()" id="{{id}}_add_btn">Add to List</button>'+
                    '</div>',
        link:function(scope,el,attrs){
          scope.add_item=function(){
                var item=el.find('input')[0];
                this.items.push(item.value);
                item.value="";

          };

        }
      };
  })
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
