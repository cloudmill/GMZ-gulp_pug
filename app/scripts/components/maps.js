import $ from "jquery";
import ymaps from "ymaps";

let maps = {
  init: function() {
    console.log('fff')
    ymaps.load(
      "https://api-maps.yandex.ru/2.1/?apikey=587b64ae-7249-4473-827f-ce90ff9529de&lang=ru_RU"
    ).then(maps => {
      
      if ($("#map").length > 0) {
        
        this.contactsMap.init(maps);
      }
    });
  },
  contactsMap: {
    center: null,
    createPlaceMark: function(coords, src, sity, name, link) {
      return new this.maps.Placemark(
        coords,
        {
          hasBalloon: false
        },
        {
          hideIconOnBalloonOpen: false,
          iconLayout: "default#image",
          iconImageHref: "images/placeMarkMap.png",
          iconImageSize: [90, 87],
          iconImageOffset: [-45, -44]
        }
      );
    },
    create: function() {
      var _this = this;
      var myMap = new this.maps.Map(
        "map",
        {
          center: _this.center,
          zoom: 6,
          controls: ['smallMapDefaultSet']
        },
        {
          searchControlProvider: "yandex#search"
        }
      );
      var clusterer = new this.maps.Clusterer({
        preset: "islands#invertedVioletClusterIcons",
        clusterIcons: [
          {
            href: "images/placeMarkMap.png",
            size: [90, 87],
            offset: [-45, -44]
          }
        ],
        groupByCoordinates: false,
        clusterIconColor: "black",
        clusterHideIconOnBalloonOpen: false,
        geoObjectHideIconOnBalloonOpen: false
      });
      if ($(".map_data .placeMark").length > 0) {
        $(".map_data .placeMark").each(function() {
          clusterer.add(
            _this.createPlaceMark(
              $(this)
                .attr("data-cords")
                .split(","),
              $(this).attr("data-name")
            )
          );
        });
      }
      myMap.geoObjects.add(clusterer);
      //if ($("#map").hasClass("hasBalloon"))
      myMap.geoObjects.options.set({ hasBalloon: false });
      // if ($(window).width() < 768) {
      //   // myMap.behaviors.disable("drag");
      // }
      myMap.events.add("click", function() {
        myMap.balloon.close();
      });
      myMap.behaviors.disable("scrollZoom");
    },
    init: function(maps) {
      this.maps = maps;
      var _this = this;
      this.center =
        $(".map_data .placeMark").length > 0
          ? $(".map_data .placeMark")
              .eq(0)
              .attr("data-cords")
              .split(",")
          : [55.751574, 37.573856];
      this.create();
    }
  }
};

export default maps;
