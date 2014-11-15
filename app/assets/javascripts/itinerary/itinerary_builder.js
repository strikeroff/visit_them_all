//= require angular-rails-templates
//= require_tree ./templates
//= require ngmap/build/scripts/ng-map.min.js
//= require_self
//= require_tree .

'use strict';
var itineraryBuilder = angular.module('itineraryBuilder', ['ngMap',"templates"]);
