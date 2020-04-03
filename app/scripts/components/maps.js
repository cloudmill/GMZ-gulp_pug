import $ from "jquery";
import ymaps from "ymaps";
import Scrollbar from "smooth-scrollbar";

const linkYmaps =
  "https://api-maps.yandex.ru/2.1/?apikey=587b64ae-7249-4473-827f-ce90ff9529de&lang=ru_RU";

let Ymaps;
let maps = {
  init: function() {
    ymaps.load(linkYmaps).then(maps => {
      if ($("#map").length > 0) {
        Ymaps = window.Ymaps = maps;
        this.setup();
      }
    });
  },
  setup: function() {
    if ($(".whereBuy-map").length > 0) {
      this.whereBuyMap.init();
    } else if ($(".contacts-map")) {
      this.contactsMap.init();
    }
  },
  contactsMap: {
    init: function() {
      let map = new Map("contacts");
    }
  },
  whereBuyMap: {
    logic: function() {
      $("#setGeoInMap").click(() => {
        let btnGeo = $("[class*=-float-button-icon_icon_geolocation]");
        if (btnGeo.length > 0) btnGeo.click();
      });
    },
    init: function() {
      let map = new Map("whereBuy");
      this.logic();
    }
  }
};

class Map {
  constructor(type) {
    this.type = type;
    ymaps.load(linkYmaps).then(maps => {
      if ($("#map").length > 0) {
        this.Ymaps = maps;
        this.init();
      }
    });
  }
  init() {
    /* Создание карты */
    this.center = [44.86402, 40.073503];
    this.map = new this.Ymaps.Map(
      "map",
      {
        center: this.center,
        zoom: 15,
        controls: ["smallMapDefaultSet"]
      },
      {
        searchControlProvider: "yandex#search"
      }
    );

    /* создание кластера для меток */
    this.clusterer = new this.Ymaps.Clusterer({
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

    /* Заполнение карты метками */
    this.setPlacemarks();

    this.map.geoObjects.add(this.clusterer);
    this.map.geoObjects.options.set({ hasBalloon: false });

    this.map.events.add("click", () => {
      this.map.balloon.close();
    });
    this.map.behaviors.disable("scrollZoom");
    if (this.clusterer._objectsCounter > 1)
      this.map.setBounds(this.map.geoObjects.getBounds());
  }
  setPlacemarks() {
    if ($(".map_data .placeMark").length > 0) {
      $(".map_data .placeMark").each((key, item) => {
        let coords = $(item)
            .attr("data-cords")
            .split(","),
          name = $(item).attr("data-name"),
          id = $(item).attr("data-id");

        this.clusterer.add(this.createPlaceMark(coords, name, id));
      });
    }
  }
  createPlaceMark(coords, name, id) {
    let placeMark = new this.Ymaps.Placemark(
      coords,
      {
        hasBalloon: false,
        hintContent: name
      },
      {
        hideIconOnBalloonOpen: false,
        iconLayout: "default#image",
        iconImageHref: "images/placeMarkMap.png",
        iconImageSize: [90, 87],
        iconImageOffset: [-45, -44]
      }
    );
    placeMark.id = id;
    placeMark.name = name;

    if (this.type == "whereBuy") {
      this.linkedWithPointForWhereBuy(placeMark);
    }

    return placeMark;
  }
  linkedWithPointForWhereBuy(placeMark) {
    let pointTarget = $(".whereBuy-map-point[data-id=" + placeMark.id + "]");

    pointTarget.click(() => {
      placeMark.events.fire("click", {
        coordPosition: placeMark.geometry.getCoordinates(),
        target: placeMark
      });
      this.map.panTo([placeMark.geometry.getCoordinates()], {
        flying: true
      });
    });
    placeMark.events.add("click", e => {
      //Активация элелмента в списке и проктутка до него
      var tempScrollbar = Scrollbar.get($(".whereBuy-map-points").eq(0)[0]);
      tempScrollbar.scrollIntoView(pointTarget.eq(0)[0], {
        offsetTop: 12,
        offsetLeft: 34,
        onlyScrollIfNeeded: true
      });

      $(".whereBuy-map-point").removeClass("active");
      pointTarget.addClass("active");
    });
  }
}

export default maps;
