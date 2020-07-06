function initMap() {
    //Map Options
    var options = {
        zoom: 12,
        center: {
            lat: 53.4808,
            lng: -2.2426
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
            //Salford
            coords: {
                lat: 53.4875,
                lng: -2.2901
            },

            iconImage: `${iconBase}user.png`,
            content: '<h1 class="content-title">Salford</h1> <p> Check out our office </p> <p>Opening times: <br> Monday - Friday: 9pm - 4pm </p>'

        },

        {
            //Stretford
            coords: {
                lat: 53.4466,
                lng: -2.3087

            },
            content: '<h1 class="content-title">Stretford</h1> <p> Check out our office </p> <p>Opening times: <br> Monday - Friday: 9pm - 4pm </p>'
        },

        {
            //Ashton Old Road
            coords: {
                lat: 53.472818,
                lng: -2.164491

            },
            content: '<h1 class="content-title">Ashton Old Road</h1> <p> Check out our office </p> <p>Opening times: <br> Monday - Friday: 9pm - 4pm </p>'
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