var app = new Vue (
  {
    el: "#app",
    data: {
      // Main Page
      listaFooterTop: [
        "Home",
        "Meet The Band",
        "Live Dates",
        "Latest News",
        "Albums",
        "Fans"
      ],
      listaMenu: [
        {
          name: "Home",
          link: "#app"
        },
        {
          name: "Meet The Band",
          link: "#"
        },
        {
          name: "Live Dates",
          link: "#liveDates"
        },
        {
          name: "Latest News",
          link: "#latestNews"
        },
        {
          name: "Albums",
          link: "#"
        },
        {
          name: "Fans",
          link: "#"
        },
      ],
      listaFooterBottom: [
        "© Copyright 2012-2020",
        "AVADA THEME BY THEMEFUSION",
        "ALL RIGHTS RESERVED",
        "POWERED BY WORDPRESS",
      ],
      listaIconeSocial: [
        "fa-facebook-f",
        "fa-twitter",
        "fa-instagram",
        "fa-youtube"
      ],
      listaDate: [
        {
          data: "17/08/2020 GEM FESTIVAL 2020 ANAKLIA, GEORIGA",
          isActive: false
        },
        {
          data: "24/09/2020 GROOVEFEST DOMINICAL REPUBLIC",
          isActive: false
        },
        {
          data: "31/10/2020 OASIS FESTIVAL 2020 MARRAKECH, MOROCCO",
          isActive: false
        },
        {
          data: "07/11/2020 MOGA FESTIVAL - ESSAOURIA, MOROCCO",
          isActive: false
        },
        {
          data: "10/12/202 ENVISION FESTIVAL - UVITA, COSTA RICA",
          isActive: false
        },
      ],
      indexLastActive: 0,
      isMenuActive: false,

      // Live Dates
      listaDateLiveDates: [
        {
          data: "17/08/2020 GEM FESTIVAL 2020 ANAKLIA, GEORIGA",
          isActive: false
        },
        {
          data: "24/09/2020 GROOVEFEST DOMINICAL REPUBLIC",
          isActive: false
        },
        {
          data: "31/10/2020 OASIS FESTIVAL 2020 MARRAKECH, MOROCCO",
          isActive: false
        },
        {
          data: "07/11/2020 MOGA FESTIVAL - ESSAOURIA, MOROCCO",
          isActive: false
        },
        {
          data: "10/12/202 ENVISION FESTIVAL - UVITA, COSTA RICA",
          isActive: false
        },
        {
          data: "15/01/2021 JAZZ MUSICAL FESTIVAL - SAN JOSE, CALIFORNI",
          isActive: false
        },
        {
          data: "17/02/2021 FOLK FESTIVAL, PHILADELPHIA",
          isActive: false
        },
        {
          data: "07/03/2021 CMA FEST IN NASHVILLE, TENNESSE",
          isActive: false
        },
        {
          data: "10/04/2021 THE GOVERNORS BALL MUSICAL FESTIVAL, NEW YORK",
          isActive: false
        },
        {
          data: "18/05/2021 ROSKIDE - ROSKIDE, DENMARK",
          isActive: false
        },
        {
          data: "22/06/2021 SPLENDOUR IN THE GRASS - NEW SOUTH WALES, AUSTRALIA",
          isActive: false
        },
        {
          data: "28/07/2021 LOLLAPLOOZA - CHICAGO",
          isActive: false
        },
        {
          data: "28/08/2021 OSHEAGA - MONTREAL",
          isActive: false
        },
        {
          data: "01/09/2021 MONTREUX JAZZ FESTIVAL - SWITZERLAND",
          isActive: false
        }
      ],

      // General
      isMainPageVisible: true,
      isLiveDatesVisible: false,
    },
    mounted: function() {

    },
    methods: {
      changeActiveIndexMainPage: function(index) {
        if (this.listaDate[index].isActive == true) {
          this.listaDate[index].isActive = false;
        } else {
          this.listaDate[this.indexLastActive].isActive = false;
          this.listaDate[index].isActive = true;
          this.indexLastActive = index;
        }
      },
      changeActiveIndexLiveDates: function(index) {
        if (this.listaDateLiveDates[index].isActive == true) {
          this.listaDateLiveDates[index].isActive = false;
        } else {
          this.listaDateLiveDates[this.indexLastActive].isActive = false;
          this.listaDateLiveDates[index].isActive = true;
          this.indexLastActive = index;
        }
      },
      changeMenuActive: function() {
        if (this.isMenuActive == false) {
          this.isMenuActive = true;
        } else {
          this.isMenuActive = false;
        }
      },
      changePage: function() {
        if (this.isMainPageVisible == false) {
          this.isMainPageVisible = true;
          this.isLiveDatesVisible = false;
        } else {
          this.isMainPageVisible = false;
          this.isLiveDatesVisible = true;
        }
      }
    }
  }
);
