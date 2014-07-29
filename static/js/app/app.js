var surasApp = angular.module('suras', [
    // 'surasApp.filters',
    // 'surasApp.services',
    'suras.directives',
    'suras.controllers',
]);

surasApp.factory('surasFactory', surasFactory);
function surasFactory($http){
    var factory = {};
    factory.getSuras = function(){
        return $http.get('/explore/sura/');
    };
    factory.getWords = function(suraNumber){
        suraNumber = suraNumber || 1;
        return $http.get('/explore/suraayas/'.concat(suraNumber));
    };
    return factory;
};

surasApp.config(function($logProvider){
    $logProvider.debugEnabled(true);
});
