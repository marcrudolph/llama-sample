describe('A BookListCtrl', function () {

  var scope, BookDataService, $controller, $rootScope, $q;
  beforeEach(module('myApp'));

  beforeEach(inject(function (_$controller_, _BookDataService_, _$rootScope_, _$q_) {
    $controller = _$controller_;
    BookDataService = _BookDataService_;
    $rootScope = _$rootScope_;
    $q = _$q_;

  }));

  it('should init $scope.books with a list of books', function () {
    scope = {};

    expect(scope.books).toBeUndefined();

    spyOn(BookDataService,'getBooks')
      .andCallFake(function(){
        return $q.when([1]);
      });

    $controller('BookListCtrl', {
      $scope: scope,
      BookDataService: BookDataService
    });

    // resolve promises
    $rootScope.$apply();

    expect(scope.books).toBeDefined();
    expect(scope.books).toEqual([1]);
    expect(BookDataService.getBooks).toHaveBeenCalled();
  });


});