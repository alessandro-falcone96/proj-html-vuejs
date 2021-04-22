var app = new Vue (
  {
    el: "#app",
    data: {

      // General
      listaMenu: [
        {
          name: "Home",
          isVisible: true
        },
        {
          name: "Meet The Band",
          isVisible: false
        },
        {
          name: "Live Dates",
          isVisible: false
        },
        {
          name: "Latest News",
          isVisible: false
        },
        {
          name: "Albums",
          isVisible: false
        },
        {
          name: "Fans",
          isVisible: false
        },
      ],
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
      isMenuActive: false,
      indexLastActive: 0,

      // Main Page
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

      // Meet The Band
      listaProfili: [
        {
          foto: "img/meetTheBand/team1.jpg",
          nome: "JOHN",
        },
        {
          foto: "img/meetTheBand/team2.jpg",
          nome: "PAUL",
        },
        {
          foto: "img/meetTheBand/team3.jpg",
          nome: "SILVIA",
        },
        {
          foto: "img/meetTheBand/team4.jpg",
          nome: "KATURO",
        },
      ],
      listaFoto: [
        "img/general/about-gallery1.jpg",
        "img/general/about-gallery2.jpg",
        "img/general/about-gallery3.jpg",
        "img/general/about-gallery4.jpg"
      ],

      // Albums
      listaAlbums: [
        {
          title: "CHARLES MANSON (BUON NATALE2) [feat. Lazza]",
          link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/716459959&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        },
        {
          title: "CABRIOLET (Live) [feat. Sfera Ebbasta]",
          link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/715430701&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        },
        {
          title: "STAI ZITTO (Live) [feat. Fabri Fibra]",
          link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/715430518&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        },
        {
          title: "IL CIELO NELLA STANZA (Live) [feat. NSTASIA]",
          link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/715430479&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        },
        {
          title: "PERDONAMI (Live)",
          link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/715430251&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        },
      ],

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
      changePage: function(index) {
        this.listaMenu[this.indexLastActive].isVisible = false;
        this.indexLastActive = index;
        this.listaMenu[index].isVisible = true;
      }
    }
  }
);
