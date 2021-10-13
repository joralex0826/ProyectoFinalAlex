<template>
  <v-footer
    dark
    padless
    bottom
    absolute
    app
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="black">
        <strong class="subheading">Contáctanos:     3219088245</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
          
          
        >
         <a :href="icon.url" :target="icon.target"><v-icon size="24px" color="white">{{ icon.name }}</v-icon></a>
          <!-- <v-icon size="24px">
            {{ icon }}
          </v-icon> -->   
        </v-btn>
      </v-card-title>

      <v-card-text class="black py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Misión Tic</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        {
            name:'mdi-github',
            url: 'https://github.com/joralex0826',
            target: '_blank'
        },
        {
            name:'mdi-linkedin',
            url: 'https://www.linkedin.com/in/jorge-alexander-fajardo-mu%C3%B1oz-bb813b214/',
            target: '_blank'
        },
        {
            name:'mdi-instagram',
            url: 'https://www.instagram.com/alexander_faj/?hl=es-la',
            target: '_blank'
        }
        // 'mdi-facebook',
        // 'mdi-twitter',
        // 'mdi-linkedin',
        // 'mdi-instagram',
       
      ],
    }),
  }
</script>