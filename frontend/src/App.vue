<template>
  <v-app>

<Barra />
    <v-main>
      <router-view/>
    </v-main>
    <v-footer>
      <Footer/>
    </v-footer>
  </v-app>
</template>

<script>

import Barra from './components/Barra.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components:{
    Barra,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>



