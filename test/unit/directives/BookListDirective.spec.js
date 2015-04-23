describe('A BookListDirective', function(){

  var $compile, $rootScope;
  beforeEach(module('myApp'));

  beforeEach(inject(function(_$compile_,_$rootScope_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));


  it('should show a list of books', function(){
    var html = '<book-list></book-list>';

    // Setup Scope
    $rootScope.books = [{name:'A'},{name:'B'},{name:'C'}];

    // compile && link to scope
    var element = $compile(html)($rootScope);
    $rootScope.$apply();

    // expect
    expect(element.find('li').length).toBe(3);
  });

});