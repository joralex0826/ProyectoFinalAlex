<template>
  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://github.com/joralex0826/Chambea/blob/main/banner%20final.png?raw=true',
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
      }
    },
  }
</script>