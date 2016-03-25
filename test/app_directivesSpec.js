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

  describe('Add to List Directive', function() {
    var el, isolatedScope;
    beforeEach(function () {
      el = compileFn('<div add-item items="[\'item1\',\'item2\']" id="test"></div>');
      isolatedScope=el.isolateScope();
    });
    it('should parse template',function(){
        expect(el.html()).toContain('<label for="test">Add to List</label>');
        expect(el.html()).toContain('<input type="text" name="test_input" id="test" placeholder="Enter a new test item">');
        expect(el.html()).toContain('<button ng-click="add_item()" id="test_add_btn">Add to List</button>');
    });

    it("should add to list ", function () {
      el.find('input')[0].value="item3";
      el.find('button')[0].click();
      expect(isolatedScope.items).toContain('item3');
    });

  });
  describe('Portfolio Section Directive', function() {
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
