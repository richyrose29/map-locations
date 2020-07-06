function initMap() {
    //Map Options
    var options = {
        zoom: 14,
        center: {
            lat: 52.4862,
            lng: -1.8904
        }
    }
    //New Map
    var map = new google.maps.Map(document.getElementById('map'), options);

    //Add Marker

    var iconBase = 'images/'
    var marker = new google.maps.Marker({

        position: {
            lat: 53.3706,
            lng: -2.8210
        },
        map: map,
        icon: `${iconBase}user.png`,

    });

    var infoWindow = new google.maps.InfoWindow({
        content: '<h2>Halewood</h2>'
    });

    marker.addListener('click', function () {
        infoWindow.open(map, marker);

    });

    //Add Marker Array 
    var iconBase = 'images/'
    var markers = [{
            //Spring Hill 
            coords: {
                lat: 52.4851,
                lng: -1.9195
            },

            iconImage: `${iconBase}user.png`,
            content: '<h1 class="content-title">Spring Hill</h1> <p> Check out our office </p> <p>Opening times: <br> Monday - Friday: 9pm - 4pm </p>'

        },

        {
            //Landor Street
            coords: {
                lat: 52.481955,
                lng: -1.871575

            },
            content: '<h1 class="content-title">Landor Street</h1> <p> Check out our office </p> <p>Opening times: <br> Monday - Friday: 9pm - 4pm </p>'
        },

        {
            //Rocky Lane
            coords: {
                lat: 52.49657,
                lng: -1.87740



            },
            content: '<h1 class="content-title">Rocky Lane</h1> <p> Check out our office </p> <p>Opening times: <br> Monday - Friday: 9pm - 4pm </p>'
        }


    ];


    //Loop Through Markers

    for (var i = 0; i < markers.length; i++) {
        //Add marker
        addMarker(markers[i]);
    }


    function addMarker(props) {

        var marker = new google.maps.Marker({

            position: props.coords,
            map: map,
            //icon: props.iconImage

        });
        //Check for custom Icon
        if (props.iconImage) {
            //Set Icon Image
            marker.setIcon(props.iconImage);
        }

        //Check content 
        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            });

            marker.addListener('click', function () {
                infoWindow.open(map, marker);

            });
        }
    }

}