function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.667864144953256, lng: 135.43083500274022 },
    zoom: 16.5,
    mapId: "af933212e48c131f",
    mapTypeControl: false,
    fullscreenControl: false,
    streetviewControl: false,
  });

  const markersArr = [
    [
      `Super Mario World`,
      34.667864144953256,
      135.43083500274022,
      "./images/super-mario.png",
      220,
      90,
    ],
    ,
    [
      `Yoshi`,
      34.665424184855624,
      135.42853466535982,
      "./images/yoshi.svg",
      70,
      65,
    ],
    [
      `Sunflower`,
      34.66734786703463,
      135.43342701452698,
      "./images/sunflower.png",
      70,
      65,
    ],
    [
      `Luigi`,
      34.669712699514086,
      135.43343774336287,
      "./images/luigi.png",
      70,
      65,
    ],
  ];

  markersArr.forEach((currMarker, index) => {
    console.log("here");
    const marker = new google.maps.Marker({
      position: { lat: currMarker[1], lng: currMarker[2] },
      map,
      title: currMarker[0],
      icon: {
        url: currMarker[3],
        scaledSize: new google.maps.Size(currMarker[4], currMarker[5]),
      },
      animation: google.maps.Animation.DROP,
    });

    const infoWindow = new google.maps.InfoWindow({
      content: currMarker[0],
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });
  });
}
