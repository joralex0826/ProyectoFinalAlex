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
          href="https://stackoverflow.com/questions/45638239/enclosing-a-router-link-tag-in-a-button-in-vuejs"
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
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
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      enlaces: [
        "https://www.facebook.com/",
        "https://twitter.com/home",
        "https://www.linkedin.com/feed/",
        "https://www.instagram.com/alexander_faj/?hl=es-la",
      ]
    }),
  }
</script>