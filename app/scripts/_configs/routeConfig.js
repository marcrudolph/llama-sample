
angular.module('myApp')
  .config(function($routeProvider){

    $routeProvider
      .when('/',{
        template: '<book-list></book-list>',
        controller: 'BookListCtrl'
      })
      .when('/book/new',{
        template: '<book-create-view></book-create-view>',
        controller: 'BookCreateCtrl'
      })
      .when('/book/:isbn',{
        template: '<h2>{{book.title}}</h2><h3>{{book.abstract}}</h3><br/><a href="#/book/{{isbn}}/edit">Edit</a>',
        controller: 'BookDetailCtrl'
      })
      .when('/book/:isbn/edit',{
        template: '<book-edit-view></book-edit-view>',
        controller: 'BookEditCtrl'
      });

  });