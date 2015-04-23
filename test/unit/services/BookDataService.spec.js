describe('A BookDataService', function(){

  var BookDataService, $httpBackend;
  var serverUrl = 'http://ajs-workshop.herokuapp.com/api/books/';

  beforeEach(module('myApp'));

  beforeEach(inject(function(_BookDataService_,_$httpBackend_){
    BookDataService = _BookDataService_;
    $httpBackend = _$httpBackend_;
  }));

  beforeEach(function(){
    $httpBackend.whenGET(serverUrl).respond([{},{},{}]);
  });


  describe('Public API', function(){
    it('should provide a getBooks() method', function(){
      expect(BookDataService.getBooks).toBeDefined();
      expect(angular.isFunction(BookDataService.getBooks)).toBe(true);
    });
  });

  describe('getBooks() method', function(){

    it('should return a promise', function(){
      expect(BookDataService.getBooks().then).toBeDefined();
      expect(angular.isFunction(BookDataService.getBooks().then)).toBe(true);
    });


    it('should trigger a get on the correct url', function(){
      // expect GET on http://ajs-workshop.herokuapp.com/api/books
      $httpBackend.expectGET(serverUrl);
      BookDataService.getBooks();
      $httpBackend.flush();
    });

    it('should return the correct data', function(){
      var books;
      $httpBackend.expectGET(serverUrl);

      BookDataService.getBooks()
        .then(function(booksData){
          books = booksData;
        });


      // sync
      $httpBackend.flush();

      expect(books).toEqual([{},{},{}]);
    });

  });



});