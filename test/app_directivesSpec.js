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

  it('should parse template',function(){
      var el= compileFn('<portfolio-section></portfolio-section>');
      expect(el.html()).toEqual('<div class="col-md-4"><h4>Interests</h4><!-- ngRepeat: interest in candidate.interests --></div>');
  });
});
