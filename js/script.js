var app = new Vue (
  {
    el: "#app",
    data: {
      listaFooterTop: [
        "Home",
        "Meet The Band",
        "Live Dates",
        "Latest News",
        "Albums",
        "Fans"
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
      // listaDate: [
      //   "17/08/2020 GEM FESTIVAL 2020 ANAKALIA, GEORIGA",
      //   "24/09/2020 GROOVEFEST DOMINICAL REPUBLIC",
      //   "31/10/2020 OASIS FESTIVAL 2020 MARRAKECH, MOROCCO",
      //   "07/11/2020 MOGA FESTIVAL - ESSAOURIA, MOROCCO",
      //   "10/12/202 MOGA FESTIVAL - UVITA, COSTA RICA"
      // ],
      listaDate: [
        {
          data: "17/08/2020 GEM FESTIVAL 2020 ANAKALIA, GEORIGA",
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
          data: "10/12/202 MOGA FESTIVAL - UVITA, COSTA RICA",
          isActive: false
        },
      ],
      indexLastActive: 0,
    },
    mounted: function() {

    },
    methods: {
      changeActiveIndex: function(index) {
        if (this.listaDate[index].isActive == true) {
          this.listaDate[index].isActive = false;
        } else {
          this.listaDate[this.indexLastActive].isActive = false;
          this.listaDate[index].isActive = true;
          this.indexLastActive = index;
        }
      },
      
    }
  }
);
