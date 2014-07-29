/* 'use strict'; */

/* Directives */


angular.module('suras.directives', []).
  directive("suraListing", function(){
    return {
      restrict: "EA",
      replace: true,
      templateUrl: 'static/js/app/templates/sura-listing.html',
    }
  }).
  directive("suraListItem", function(){
    return {
      restrict: "EA",
      replace: true,
      templateUrl: 'static/js/app/templates/sura-list-item.html',
    }
  }).
  directive("suraDetail", function(){
    return {
      restrict: "EA",
      replace: true,
      templateUrl: 'static/js/app/templates/sura-detail.html',
    }
  }).
  directive("suraAyaDetail", function(){
    return {
      restrict: "EA",
      replace: true,
      templateUrl: 'static/js/app/templates/sura-aya-detail.html',
    }
  }
)
;

