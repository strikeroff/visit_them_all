//= require angular-rails-templates
//= require_tree ./templates
// require ngmap/build/scripts/ng-map.min.js
//= require_self
//= require_tree .

'use strict';
//var itineraryBuilder = angular.module('itineraryBuilder', ['ngMap',"templates"]);
var itineraryBuilder = angular.module('itineraryBuilder', ['uiGmapgoogle-maps',"templates"]);
itineraryBuilder.config(['uiGmapGoogleMapApiProvider', function (GoogleMapApi) {
    GoogleMapApi.configure({
//    key: 'your api key',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });
}]);
//itineraryBuilder.config(function(uiGmapGoogleMapApiProvider) {
//
//    uiGmapGoogleMapApiProvider.configure({
//        //    key: 'your api key',
//        v: '3.17',
//        libraries: 'weather,geometry,visualization'
//    });
//});
