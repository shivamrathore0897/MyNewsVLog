
function updateMap() {
    fetch("data.json")
        .then(response => response.json())
        .then(CoronaData => {

            console.log(CoronaData.data)
            CoronaData.data.forEach(element => {

                latitude = element.latitude;
                longitude = element.longitude;
                cases= element.infected;
                if (cases>255){
                    color="rgb(255,0,0)"; 

                }

                else{
                    color = `rgb(${cases}, 0, 0)`;

                }


                new mapboxgl.Marker({
                    draggable: false,
                    color:color
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map);

            });



        })


}


updateMap();


// let interval = 20000;
// setInterval( updateMap, interval); 




//pk.eyJ1Ijoic2hpdmFtcmF0aG9yZTA4OTciLCJhIjoiY2tidzJscHp2MGJ5djJ4bXh6aTN2YXFuciJ9.u26uM6F2I6stpc3Nj03zqQ