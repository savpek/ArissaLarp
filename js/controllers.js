'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('HackerPageController', [function() {

    }])

    .controller('LoginController', [function() {
        setTimeout(function () {
            $('#toHackerPage').modal('show')
        }, 2000);
    }])