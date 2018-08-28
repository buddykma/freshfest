let marker = null;

function initMap() {
    center = new google.maps.LatLng(50.464379, 30.519131);

    var html_element = document.getElementById("google_map");

    var mapProp = {
        center: center,
        zoom: 15,
        disableDefaultUI: true,
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#263c3f'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#6b9a76'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#38414e'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#212a37'}]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9ca5b3'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#746855'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#1f2835'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#f3d19c'}]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#2f3948'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#17263c'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#515c6d'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#17263c'}]
            }
        ]
    };

    var map = new google.maps.Map(html_element, mapProp);

    var contentString = '<div style="color: black; text-align: left"><div style="font-size: 22px;border-bottom: 1px solid gray; margin-bottom: 5px"><b>Title</b></div><div>that was easy</div></div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    google.maps.event.addListener(infowindow,'closeclick',function(){
        $('.not-active').css('visibility','visible').hide().fadeIn(1000);
        $('.holder').removeClass('not-active').addClass('not-active');
        // alert('closed') //removes the marker
        // then, remove the infowindows name from the array
    });

    marker = new google.maps.Marker({
        position: center,
        map: map,
        icon: "assets/images/map-icon.png",
        title: 'Marker'
    });

    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
}
;

function markerClick() {
    google.maps.event.trigger(marker, 'click');
}

$(window).load(function () {
    $('.logo').fadeIn(1000, function () {
        $(this).css({
            '-webkit-transition': 'all 10s cubic-bezier(1,.03,.37,.89)',
            '-moz-transition': 'all 10s cubic-bezier(1,.03,.37,.89)',
            '-ms-transition': 'all 10s cubic-bezier(1,.03,.37,.89)',
            '-o-transition': 'all 10s cubic-bezier(1,.03,.37,.89)',
            'transition': 'all 10s cubic-bezier(1,.03,.37,.89)'
        }).addClass('animate');
        setTimeout(function () {
            $('.logo').hide(0);
            $('#title').css({
                'top': '0',
                'bottom': '7%'
            });
            $('.container').fadeIn(3000)
        }, 1000)
    });
});

$(function () {

    $('.holder').addClass('not-active');

    $('.holder').click(function () {
        // console.log('clicked')
        $(this).removeClass('not-active');
        $('.not-active').fadeOut(1000, function() {
            $('.not-active').css({"display": "block","visibility": "hidden"});  // <-- Style Overwrite
        });
        markerClick();
    });
});