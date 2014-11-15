'use strict';

itineraryBuilder.controller('ItineraryBuilderController', ['$scope', '$http', "$timeout",
    function ($scope, $http, $timeout) {

        $scope.map = null;
        $scope.$on('mapInitialized', function (evt, evtMap) {

            $scope.map = evtMap;


            $scope.map.setCenter(new google.maps.LatLng(53.221446, 50.194553));
            $scope.map.setZoom(11);

            angular.forEach($scope.stops, function (stop, index) {
                var marker = $scope.add_Marker(stop.address, stop.address.street_line_1);
                marker.setOptions({
                        raiseOnDrag: true,
                        labelContent: "" + index,
                        labelAnchor: new google.maps.Point(8, 32),
                        labelClass: "stop-label", // the CSS class for the label
                        labelInBackground: false,
                        labelVisible: true
                    }
                );
                stop["marker"] = marker;
                $scope.fitBounds();
            });


//            navigator.geolocation.getCurrentPosition(function (position) {
//                console.log(position.coords.latitude,
//                    position.coords.longitude);
//                var pos = new google.maps.LatLng(position.coords.latitude,
//                    position.coords.longitude);
//                $scope.map.setCenter(pos);
//            });


        });

        $scope.fitBounds = function () {
            var bound = new google.maps.LatLngBounds();
            angular.forEach($scope.stops, function (stop, index) {
//                if (stop["marker"] != null) {
//                    bound.extend(stop["marker"].getPosition());
//                } else {
//
//                }
                bound.extend(new google.maps.LatLng(stop.address.lat, stop.address.lng));
            });
            $scope.map.fitBounds(bound);
        };
        $scope.add_Marker = function (point, locationName) {
            return new MarkerWithLabel({
                position: new google.maps.LatLng(point.lat, point.lng),
                title: locationName,
                map: $scope.map,
                icon: '/assets/markers/blue.png'
            });
        };


        $scope.centerChanged = function (event) {
            $timeout(function () {
                $scope.map.panTo(marker.getPosition());
            }, 3000);
        };
        $scope.click = function (event) {
            $scope.map.setZoom(8);
            $scope.map.setCenter(marker.getPosition());
        };

        $scope.stops = [
            {
                address: {
                    street_line_1: "Tsentralnaya ul., 27",
                    city: "Samara",
                    state: "Samarskaya oblast'",
                    zip: "443080",
                    country: "RU",
                    lat: 53.221263,
                    lng: 50.194241
                },
                time: {
                    expect_to_spend: "",
                    open_hours: ""

                }
            },
            {
                address: {
                    street_line_1: " Moskovskoye shosse, 185А",
                    city: "Samara",
                    state: "Samarskaya oblast'",
                    zip: "443087",
                    country: "RU",
                    lat: 53.248772,
                    lng: 50.220729
                },
                time: {
                    expect_to_spend: "",
                    open_hours: ""

                }
            }
        ]
    }]);
