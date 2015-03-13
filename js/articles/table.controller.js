angular
  .module('news')
  .controller('ArticleTableCtrl', ArticleTableCtrl)

function ArticleTableCtrl($http) {
  var vm = this;

  vm.vote = function (direction, uuid) {
    var article = vm.articles[uuid];
    var user    = 'Anonymous';
    var vote = {};

    vote[uuid] = direction;

    if (direction === 'up') {
      article.votes.up++
    } else {
      article.votes.down++
    }

    $http.put('https://newsfeedapplication.firebaseio.com//articles/' + uuid + '.json', article);
    $http.patch('https://newsfeedapplication.firebaseio.com/' + user +  '.json',  vote);
  };


  $http
    .get('https://newsfeedapplication.firebaseio.com/articles.json')
    .success(function (data) {
      vm.articles = data;
    });

}