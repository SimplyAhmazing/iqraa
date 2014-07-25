var surasApp = angular.module('suras', []);
surasApp.controller('surasController', surasController);

function surasController($scope, surasFactory){
    function init(){
        surasFactory.getSuras().success(function(data){
            $scope.suraItems = data;
        }).error(function(){
            alert('error getting suras data');
        });

        $scope.suraInfo = {sura: null, ayas: []};
    };

    $scope.openSura = function(suraItem){
        surasFactory.getWords(suraItem.number).success(function(data){
            $scope.suraInfo = {sura: suraItem, ayas: data};
            console.log($scope.suraInfo);
        }).error(function(){ alert('error getting suras data')});
    };

    $scope.openWord = function(word){
        $scope.vocabWords = $scope.vocabWords || [];
        $scope.vocabWords.push(word);
    };

    $scope.updateSearch = function(transcript){
        $scope.searchText = transcript;
    };

    $scope.transcribeSpeech = function(){
        var speech = function () {
            if (typeof speechRecognition !== 'undefined') {
                return new speechRecognition();
            } else if (typeof msSpeechRecognition !== 'undefined') {
                return new msSpeechRecognition();
            } else if (typeof mozSpeechRecognition !== 'undefined') {
                return new mozSpeechRecognition();
            } else if (typeof webkitSpeechRecognition !== 'undefined') {
                return new webkitSpeechRecognition();
            }
            throw new Error('No speech recognition API detected.');
        };
        // var recognition = new webkitSpeechRecognition();
        var recognition = speech();
        // recognition.updateSearch = $scope.updateSearch;

        recognition.onresult = function(event) {
            console.log(event);
            var transcript = event.results['0']['0'].transcript;
            $scope.searchText = transcript;
            $scope.$apply()
        }
        recognition.lang = 'ar-sa';
        recognition.start();
    }
    init();
};

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
