<template>
<v-container>
    <center>
    <h1>¿Quiénes somos?</h1>
    </center>
<p class="text-justify">
Somos una empresa dedicada al comercio enfocado a los artículos gamer de todo tipo, podrás encontrar desde videojuegos en gran variedad de consolas, 
hasta articulos y componentes para tu computador. Tenemos asociación con la franquicia conocida por su calidad
Corsair, por tanto encontrarás los mejores descuentos para todo artículo de esta marca.
</p>
    <center>
    <h2>Nuestro equipo</h2>
    </center>
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
      src="https://github.com/joralex0826/Chambea/blob/main/alex.jpg?raw=true"
    ></v-img>

    
    <v-card-title>Jorge A. Fajardo M.</v-card-title>
    

    <v-card-text>
      <v-column
        align="center"
        class="mx-0"
      >
      </v-column>

      <div>Jorge es matemático de la Universidad Distrital Francisco José de Caldas de Bogotá, Colombia. Se desempeña como científico de datos y es nuestro fundador.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>


  </v-card>
  <center>
    <h2>Nuestras sucursales</h2>
    </center>
<v-card
    class="mx-auto"
    max-width="1500"
  >
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
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>

  

</v-container>




</template>


<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Bogotá: cll 140 #30-53', src: 'https://www.semana.com/resizer/EC6yLxn0JhjJ43L3DRao8HYuh3w=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/FRLT64R3MZDTRMRGRVWR5CL5QE.jpg', flex: 12 },
        { title: 'Cali: cra 40 #14-23', src: 'https://e00-co-marca.uecdn.es/claro/assets/multimedia/imagenes/2021/05/10/16206117880166.jpg', flex: 6 },
        { title: 'Medellín: cra 66 #35-70', src: 'https://cdn.forbes.co/2020/09/Medell%C3%ADn-foto-ProColombia.jpg', flex: 6 },
      ],
    }),
  }
</script>