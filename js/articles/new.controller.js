angular
  .module('news')
  .controller('NewArticleCtrl', NewArticleCtrl);

function NewArticleCtrl($http, $location) {
  var vm = this;

  vm.submit = function () {
    vm.newArticle.postDate = (new Date()).toJSON();
    vm.newArticle.submittedBy = 'Anonymous';
    vm.newArticle.votes = {up: 0, down: 0};

    $http
      .post('https://newsfeedapplication.firebaseio.com//articles.json', vm.newArticle)
      .success(function () {
        $location.path('/');
      });
  }
}


