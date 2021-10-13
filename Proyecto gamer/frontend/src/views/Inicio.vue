<!--<template>
<v-container>
  <center>
    <h1>La Cueva Gamer te ofrece numerosas ventajas , regístrate y haz parte de esta gran comunidad!</h1>
    </center>
<p class="text-justify">
Nos importa que cada experiencia de nuestros clientes sea única e inolvidable, por esto, trabajamos cada día para 
proveer artículos de calidad con los mejores precios del mercado, siempre poniendo primero las necesidades de 
cada uno de ustedes.
</p>

  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-system-bar
      color="indigo darken-2"
      dark
    >
      <v-spacer></v-spacer>

      <v-icon>mdi-window-minimize</v-icon>

      <v-icon>mdi-window-maximize</v-icon>

      <v-icon>mdi-close</v-icon>
    </v-system-bar>

    <v-toolbar
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Discover</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>

    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>-->









<!-- 
<v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://github.com/joralex0826/Chambea/blob/main/Logotipo%20para%20Cantante%20de%20M%C3%BAsica%20Rap%20con%20Grafitti%20en%20Amarillo%20Brillante.png?raw=true"
    ></v-img>

    <v-card-title>Membresia mensual</v-card-title>

    <v-card-text>
      <v-column
        align="center"
        class="mx-0"
      >
      </v-column>

      <div class="my-4 text-subtitle-1">
        $ 10.000
      </div>

      <div>Con la membresia mensual recibes descuentos especiales, juegos gratis cada  6 meses y una camiseta.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>


    <v-card-actions>
      <v-btn
        color=#f8c300
        text
        @click="adquierelo"
      >
        Adquierelo aquí
      </v-btn>
    </v-card-actions>
  </v-card>

  <div>
    <v-card class="mt-5 mb-8">
      <v-card-text>
        <v-container pa-0>
          <v-row no-gutters>
            <v-col cols="12">
              <v-card
                class="pa-2"
                outlined
                tile
                append
                color=black
              >
              <center>
                <h1 class="white--text">SUSCRIPCIONES</h1>
              </center>
              </v-card>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="4">
              <v-card
                class="pa-2"
                outlined
                tile
                color=#ffab00
                
              >
                <template slot="progress">
      <v-progress-linear
        color=#ffab00
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://github.com/joralex0826/Chambea/blob/main/Logotipo%20para%20Cantante%20de%20M%C3%BAsica%20Rap%20con%20Grafitti%20en%20Amarillo%20Brillante.png?raw=true"
    ></v-img>

    <v-card-title >Membresia mensual</v-card-title>

    <v-card-text  class="black--text"> 
      <v-column
        align="center"
        class="mx-0"
      >
      </v-column>

      <div class="my-4 text-subtitle-1">
        $ 50.000
      </div>

      <div>Con la membresia mensual recibes descuentos especiales y una camiseta de la cual puedes escoger el diseño.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>


    <v-card-actions>
      <v-btn
        color=black
        text
        @click="adquierelo"
      >
        Adquierelo aquí
      </v-btn>
    </v-card-actions>

              </v-card>
            </v-col>
            <v-col cols="4">
              <v-card
                class="pa-2"
                outlined
                tile
                color=black
              >
                <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://github.com/joralex0826/Chambea/blob/main/Logotipo%20para%20Cantante%20de%20M%C3%BAsica%20Rap%20con%20Grafitti%20en%20Amarillo%20Brillante.png?raw=true"
    ></v-img>

    <v-card-title class="white--text">Membresia por 6 Meses</v-card-title>

    <v-card-text  class="white--text">
      <v-column
        align="center"
        class="mx-0"
      >
      </v-column>

      <div class="my-4 text-subtitle-1">
        $ 180.000
      </div>

      <div>Con la membresia por 6 meses recibes descuentos, la camiseta personalizada, y un juego totalmente gratis para la consola que decidas.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>


    <v-card-actions>
      <v-btn
        color=#f8c300
        text
        @click="adquierelo"
      >
        Adquierelo aquí
      </v-btn>
    </v-card-actions>

              </v-card>
            </v-col>
            <v-col cols="4">
              <v-card
                class="pa-2"
                outlined
                tile
                color=#ffab00
              >
                <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://github.com/joralex0826/Chambea/blob/main/Logotipo%20para%20Cantante%20de%20M%C3%BAsica%20Rap%20con%20Grafitti%20en%20Amarillo%20Brillante.png?raw=true"
    ></v-img>

    <v-card-title class="black--text">Membresia Anual</v-card-title>

    <v-card-text class="black--text">
      <v-column
        align="center"
        class="mx-0"
      >
      </v-column>

      <div class="my-4 text-subtitle-1">
        $ 200.500
      </div>

      <div>
        Con la membresia anual recibes descuentos, la camiseta personalizada, un juego totalmente gratis, participar en sorteos y eventos. 
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>


    <v-card-actions>
      <v-btn
        color=black
        text
        @click="adquierelo"
      >
        Adquierelo aquí
      </v-btn>
    </v-card-actions>

              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </div> -->



  

<!-- </v-container>
</template>

<!-- https://vuetifyjs.com/en/ 
<link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" rel="stylesheet"> -->


<!-- <script src="https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js"></script>
<script src="https://unpkg.com/masonry-layout@4.2.2/dist/masonry.pkgd.min.js"></script>

<script scope>

  

  .container {
    border: 1px solid green;
  }
  .row {
    border: 1px solid red;
  }
  .col {
    border: 1px solid blue;
  }
  export default {
    data: () => ({
      loading: false,
      selection: 1,
      cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      ],
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
 new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  mounted: function () {
      // Code that will run only after the
      // entire view has been rendered
      var msnry = new Masonry( '.masonry', {
        // options
        itemSelector: "[class*='col-']",
      });
  }
})

</script> -->







<template>
  <v-card
    class="mx-auto"
    max-width="1300"
  >
    <v-container fluid>

      <!-- <v-row dense>
        <v-card>
            <v-carousel hide-delimiters>
              <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
              ></v-carousel-item>
            </v-carousel>
        </v-card>
      </v-row> -->

     
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card dark hover=true elevation raised=true shaped link to="tabla">
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height = "400px"
              width = "1500px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>


<script>
  export default {
    data: () => ({
            return: {
        items: [
          {
            src: 'https://http2.mlstatic.com/D_NQ_NP979256-MLA46991914028_082021-B.jpg',
          },
          {
            src: 'https://github.com/joralex0826/Chambea/blob/main/Yellow%20and%20Black%20Classic%20Maximalist%20Sports%20Football%20Promo%20Banner%20(6).png?raw=true',
          },
          {
            src: 'https://github.com/joralex0826/Chambea/blob/main/blackfriday.png?raw=true',
          },
          {
            src: 'https://cometware.com/pub/media/wysiwyg/pages/Banner-Corsair.jpg',
          },
        ],
      },
      show: false,
      cards: [
        {src:'https://github.com/joralex0826/Chambea/blob/main/Yellow%20and%20Black%20Classic%20Maximalist%20Sports%20Football%20Promo%20Banner%20(6).png?raw=true', flex:  8},
        {title:'Nuevo Corsair xPro230, ¡adquiérelo ya!', src:'https://github.com/joralex0826/Chambea/blob/main/mouse.png?raw=true', flex:  4},
        {title:'Llega el mundial de League of Legends, ¡no te lo pierdas!' ,src:'https://elcomercio.pe/resizer/ikwCsxrNrqCkN9EhvHCBgRysZgk=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/RSSXSZMT65ERRGOFKISJXTJWTI.png', flex:  6},
        {src:'https://github.com/joralex0826/Chambea/blob/main/blackfriday.png?raw=true', flex:  6},
        { title: 'Videojuegos', src: 'https://i.guim.co.uk/img/media/7c2ab1a3e60e445caf0a4d3de302591e830e8f7f/0_0_3800_2280/master/3800.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=7d6c67329b3552e08c43c4dfb8accd3a', flex:  3},
        { title: 'Consolas', src: 'https://http2.mlstatic.com/D_NQ_NP979256-MLA46991914028_082021-B.jpg', flex: 3 },
        { title: 'Computadoras gamer', src: 'https://helprint.cl/wp-content/uploads/2020/07/PC-Gamer.png', flex: 3 },
        { title: 'Ropa', src: 'https://ropagamer.shop/wp-content/uploads/2021/05/71xZ2Dvdb4L._AC_UX679_.jpg', flex: 3},
        { title: 'Sillas gamer', src: 'https://m.media-amazon.com/images/I/61WRLj0-iwL._AC_SY450_.jpg', flex: 3 },
        { title: 'Riot Points', src: 'https://i.blogs.es/ff4f41/elqk-v1wmauw09m/840_560.jpg', flex: 3 },
        { title: 'Comics', src: 'https://i0.wp.com/hipertextual.com/wp-content/uploads/2015/02/dc-comics-universe.jpg?fit=1200%2C750&ssl=1', flex: 3 },
        { title: 'Gafas gaming', src: 'https://hardzone.es/app/uploads-hardzone.es/2021/03/Gafas-gaming.jpg', flex: 3},  
        { title: 'Suscripción mensual', src: 'https://github.com/joralex0826/Chambea/blob/main/logo1.png?raw=true', flex: 4 },
        { title: 'Suscripción semestral', src: 'https://github.com/joralex0826/Chambea/blob/main/logo2.png?raw=true', flex: 4 },
        { title: 'Suscripción anual', src: 'https://github.com/joralex0826/Chambea/blob/main/logo3.png?raw=true', flex: 4 },    
      ],
    }),
  }
</script>





