function initMap() {
    //Map Options
    var options = {
        zoom: 12.5,
        center: {
            lat: 51.5074,
            lng: -0.1278
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
            //Old Bond street
            coords: {
                lat: 51.50891,
                lng: -0.14084
            },


            iconImage: `${iconBase}user.png`,
            content: '<h1 class="content-title">Old Bond Street</h1> <p> Check out our office </p> <p>Opening times: <br> Monday - Friday: 9pm - 4pm </p>'

        },

        {
            //Allen Street
            coords: {
                lat: 51.49799,
                lng: -0.19483

            },
            content: '<h1 class="content-title">Allen Street</h1> <p> Check out our office </p> <p>Opening times: <br> Monday - Friday: 9pm - 4pm </p>'
        },

        {
            //Well Street
            coords: {
                lat: 51.54240,
                lng: -0.04884

            },
            content: '<h1 class="content-title">Well Street</h1> <p> Check out our office </p> <p>Opening times: <br> Monday - Friday: 9pm - 4pm </p>'
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