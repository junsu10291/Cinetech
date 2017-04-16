var app = angular.module('myApp', ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "./views/main.html",
    })
    .when("/recommendation", {
        templateUrl : "./views/recommendation.html"
    })
    .when("/account", {
        templateUrl : "./views/account.html"
    })
    .when("/rate", {
        templateUrl : "./views/rate.html"
    })
    .otherwise({redirectTo:'/'});
});

app.controller("appController", function($scope) {
    $scope.profile_panel_content = 
    [
        {'icon': "glyphicon glyphicon-king", 'text': "MOVIE GURU"},
        {'icon': "glyphicon glyphicon-facetime-video", 'text': "PLAY TIME"}, 
        {'icon': "glyphicon glyphicon-time", 'text': "NUM RATED"}, 
        {'icon': "glyphicon glyphicon-star", 'text': "AVG RATING"} 
    ];
    $scope.movies = [];
    $scope.stars = [];
    $scope.modal_stars = [];
    $scope.detail_movies = [];
    $scope.modal_restart = false;

     for (let i = 0; i < 15; i++) {
        $scope.movies.push({"show": false});
     }

     for (let i = 0; i < 3; i++) {
        $scope.detail_movies.push({"show": false});
     }

     for (let i = 0; i < 5; i++) {
        $scope.stars.push({"id": i, "fill": false});
     }

     for (let i = 0; i < 5; i++) {
        $scope.modal_stars.push({"id": i, "fill": false});
     }

    $scope.movieMouseOver = function(event) {
        $scope.showPanel = true;
    }

    $scope.movieMouseLeave = function() {
        $scope.showPanel = false;
    }

    $scope.focusStars = function(starId) {
        for (let i = starId; i >= 0; i--) {
            $scope.stars[i].fill = true;
        }
    }

    $scope.unfocusStars = function() {
        for (let i = 0; i < $scope.stars.length; i++) {
            $scope.stars[i].fill = false;
        }
    }

    $scope.focusModalStars = function(starId) {
        for (let i = starId; i >= 0; i--) {
            $scope.modal_stars[i].fill = true;
        }
    }

    $scope.unfocusModalStars = function() {
        for (let i = 0; i < $scope.stars.length; i++) {
            $scope.modal_stars[i].fill = false;
        }
    }

    $scope.detailToggleModal = function() {
        $scope.modal_restart = true;
        $('.movieDetailModal').modal('hide');    

        $('.movieDetailModal').on('hidden.bs.modal', function (e) {
            if ($scope.modal_restart) {
                console.log("show!!");
                $('.movieDetailModal').modal('show');
                $scope.modal_restart = false;
            }
        });    
    }

    $scope.carouselLeft = function() {
        $('#main-carousel').carousel('prev');
    }

    $scope.carouselRight = function() {
        $('#main-carousel').carousel('next');
    }

    $scope.modalTrigger = function() {
        $('.movieDetailModal').modal('toggle');
    }

    $scope.registerModalTrigger = function() {
        $('#registerModal').modal('toggle');
    }

    $scope.loginModalTrigger = function() {
        $('#loginModal').modal('toggle');
    }
});