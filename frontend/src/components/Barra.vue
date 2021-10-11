<template>
  <v-card class="overflow-hidden" :elevation="0-1">
    <v-app-bar
      color="grey darken-3"
      dark
      shrink-on-scroll
      prominent
      loading
      ligth
      flex
      
      src="https://github.com/joralex0826/Chambea/blob/main/bannerazul.png?raw=true"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(20,15,20,.7), rgba(50,32,72,.7)"
        ></v-img>
      </template>

     
      <v-spacer></v-spacer>
      


      



      <h1 class="display-2">
      <v-app-bar-title></v-app-bar-title>
      </h1>
      <v-spacer></v-spacer>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab @click="llamarInicio()" >Inicio</v-tab>
          <v-tab @click="llamarTabla()"> Productos </v-tab>
          <v-tab @click="llamarCarrusel()"> Galeria </v-tab>
          <v-tab @click="llamarRegistro()"> Registrarse</v-tab>
          <v-tab @click="llamarConocenos()"> Conócenos </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="600"
    >
    </v-sheet>
  </v-card>
</template>


<script>
export default {
    data: ()=> ({
    }),
   
    methods:{
        llamarRegistro() {
            this.$router.push('/registro')
        },
        llamarTabla() {
            this.$router.push('/tabla')
        },
        llamarInicio() {
            this.$router.push('/inicio')
        },
        llamarCarrusel() {
            this.$router.push('/carrusel')
        },
        llamarConocenos() {
            this.$router.push('/conocenos')
        }
    }
}
</script>