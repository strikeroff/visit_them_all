'use strict';

itineraryBuilder.controller('ItineraryBuilderController',
    ['$scope', '$http', "$timeout", 'uiGmapGoogleMapApi', 'uiGmapIsReady', 'uiGmapLogger',
        function ($scope, $http, $timeout, GoogleMapApi, uiGmapIsReady, $log) {

            $scope.init = function (stops) {
                $scope.stops = stops
            };

            $log.doLog = true;
            $log.currentLevel = $log.LEVELS.debug;
            angular.extend($scope, {
                map: {
                    center: {
                        latitude: 45,
                        longitude: -73
                    },
                    options: {
                        streetViewControl: false,
                        panControl: false,
                        maxZoom: 20,
                        minZoom: 3
                    },
                    zoom: 3,
                    dragging: false,
                    bounds: {},
                    control: {},
                    showTraffic: false,
                    events: {
                        tilesloaded: function (map, eventName, originalEventArgs) {
                            //console.log("tilesloaded:  " + map, eventName, originalEventArgs);
                        },
                        click: function (mapModel, eventName, originalEventArgs) {
                            // 'this' is the directive's scope
                            //console.log("user defined event: " + eventName, mapModel, originalEventArgs);
                            //
                            //var e = originalEventArgs[0];
                            //var lat = e.latLng.lat(),
                            //    lon = e.latLng.lng();
                            //$scope.map.clickedMarker = {
                            //    id: 0,
                            //    options: {
                            //        labelContent: 'You clicked here ' + 'lat: ' + lat + ' lon: ' + lon,
                            //        labelClass: "marker-labels",
                            //        labelAnchor: "50 0"
                            //    },
                            //    latitude: lat,
                            //    longitude: lon
                            //};
                            ////scope apply required because this event handler is outside of the angular domain
                            //$scope.$apply();
                        }
                    },
                    markers: []
                }

            });

            GoogleMapApi.then(function (maps) {
                console.log("GoogleMapApi loaded!");
                //console.log($scope.map);
                $scope.googleVersion = maps.version;
                maps.visualRefresh = true;
                //$scope.map['center'] = {
                //    latitude: 53.221446,
                //    longitude: 50.194553
                //};
                //$scope.map.zoom = 11;
                //angular.extend($scope.map, {
                //    center: {
                //        latitude: 53.221446,
                //        longitude: 50.194553
                //    },
                //    zoom: 11
                //});


                //console.log('adjusted map', $scope.map);

                angular.forEach($scope.stops, function (stop, index) {
                    var marker = $scope.buildMarker(stop.address, stop.address.street_line_1);
                    var markerOptions = {
                        id: stop.id,
                        options: {
                            raiseOnDrag: true,
                            labelContent: "" + index,
                            labelAnchor: "8 32",
                            labelClass: "stop-label", // the CSS class for the label
                            labelVisible: true
                            //labelInBackground: false,
                        }
                    };
                    angular.extend(marker, markerOptions);
                    stop["marker"] = marker;
                    console.log(marker);
                    //$scope.fitBounds();
                    //debugger
                    $scope.map.markers.push(marker)
                });


            });


            $scope.buildMarker = function (point, locationName) {
                return {

                    latitude: point.lat,
                    longitude: point.lng,
                    title: locationName,
                    icon: '/assets/markers/blue.png'
                };
            };
            //$scope.googleVersion = maps.version;


            //$scope.map = {
            //    show: true,
            //    control: {},
            //    version: "uknown",
            //    showTraffic: true,
            //    showBicycling: false,
            //    showWeather: false,
            //    showHeat: false,
            //    center: {
            //        latitude: 45,
            //        longitude: -73
            //    },
            //    options: {
            //        streetViewControl: false,
            //        panControl: false,
            //        maxZoom: 20,
            //        minZoom: 3
            //    },
            //    zoom: 3,
            //    dragging: false,
            //    bounds: {}
            //};
            //$scope.map = null;
//        $scope.$on('mapInitialized', function (evt, evtMap) {
//
//            $scope.map = evtMap;
//
//
//            $scope.map.setCenter(new google.maps.LatLng(53.221446, 50.194553));
//            $scope.map.setZoom(11);
//
//            angular.forEach($scope.stops, function (stop, index) {
//                var marker = $scope.add_Marker(stop.address, stop.address.street_line_1);
//                marker.setOptions({
//                        raiseOnDrag: true,
//                        labelContent: "" + index,
//                        labelAnchor: new google.maps.Point(8, 32),
//                        labelClass: "stop-label", // the CSS class for the label
//                        labelInBackground: false,
//                        labelVisible: true
//                    }
//                );
//                stop["marker"] = marker;
//                $scope.fitBounds();
//            });
//
//
////            navigator.geolocation.getCurrentPosition(function (position) {
////                console.log(position.coords.latitude,
////                    position.coords.longitude);
////                var pos = new google.maps.LatLng(position.coords.latitude,
////                    position.coords.longitude);
////                $scope.map.setCenter(pos);
////            });
//
//
//        });


//        $scope.fitBounds = function () {
//            var bound = new google.maps.LatLngBounds();
//            angular.forEach($scope.stops, function (stop, index) {
////                if (stop["marker"] != null) {
////                    bound.extend(stop["marker"].getPosition());
////                } else {
////
////                }
//                bound.extend(new google.maps.LatLng(stop.address.lat, stop.address.lng));
//            });
//            $scope.map.fitBounds(bound);
//        };

            //$scope.add_Marker = function (point, locationName) {
            //    return new MarkerWithLabel({
            //        position: new google.maps.LatLng(point.lat, point.lng),
            //        title: locationName,
            //        map: $scope.map,
            //        icon: '/assets/markers/blue.png'
            //    });
            //};
            //
            //
            //$scope.centerChanged = function (event) {
            //    $timeout(function () {
            //        $scope.map.panTo(marker.getPosition());
            //    }, 3000);
            //};
            //$scope.click = function (event) {
            //    $scope.map.setZoom(8);
            //    $scope.map.setCenter(marker.getPosition());
            //};

            //$scope.stops = [
            //    {
            //        id: 1,
            //        address: {
            //            street_line_1: "Tsentralnaya ul., 27",
            //            city: "Samara",
            //            state: "Samarskaya oblast'",
            //            zip: "443080",
            //            country: "RU",
            //            lat: 53.221263,
            //            lng: 50.194241
            //        },
            //        time: {
            //            expect_to_spend: "",
            //            open_hours: ""
            //
            //        }
            //    },
            //    {
            //        id: 2,
            //        address: {
            //            street_line_1: " Moskovskoye shosse, 185А",
            //            city: "Samara",
            //            state: "Samarskaya oblast'",
            //            zip: "443087",
            //            country: "RU",
            //            lat: 53.248772,
            //            lng: 50.220729
            //        },
            //        time: {
            //            expect_to_spend: "",
            //            open_hours: ""
            //
            //        }
            //    }
            //]
        }]);
