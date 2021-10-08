<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      color="grey darken-3"
      dark
      shrink-on-scroll
      prominent
      loading
      ligth
      rounded
      src="https://wallpapercave.com/wp/wp3396925.jpg"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(20,15,20,.7), rgba(50,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-spacer></v-spacer>

      <h1 class="display-2">
      <v-app-bar-title>Periodico Noticias</v-app-bar-title>
      </h1>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>Iniciar Sesión</v-tab>
          <v-tab @click="llamarRegistro()"> Registrarse</v-tab>
          <v-tab @click="llamarTabla()"> Productos </v-tab>
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
    data() {
        
    },
    methods:{
        llamarRegistro() {
            this.$router.push('/registro')
        },
        llamarTabla() {
            this.$router.push('/tabla')
        }
    }
}
</script>