describe("Directives", function () {
  var compileFn;

  beforeEach(module('candidatePortal'));
  beforeEach(inject(function injector($compile, $rootScope) {
    compileFn=function compileDirective(html){
          var element=$compile(html)($rootScope);
          $rootScope.$digest();
          return element;
    };
  }));
  describe('Parse directive', function() {
      var el, isolatedScope;
      beforeEach(function () {
        el= compileFn('<portfolio-section items="[\'item1\',\'item2\']" header="Test"></portfolio-section>');
        isolatedScope=el.isolateScope();
      });
      it('should parse template',function(){
          expect(el.html()).toContain('<h4 class="ng-binding">Test</h4>');
          expect(el.html()).toContain('<p ng-repeat="item in items" class="ng-binding ng-scope">item1</p>');
          expect(el.html()).toContain('<p ng-repeat="item in items" class="ng-binding ng-scope">item2</p>');
      });
      it("should pass in a list of items", function () {
          expect(isolatedScope.items).toEqual(['item1','item2']);
      });
      it("should pass in a header", function () {
          expect(isolatedScope.header).toBe('Test');
      });
  });
});
