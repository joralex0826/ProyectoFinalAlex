<template>
<v-container>
  <v-form @submit.prevent="agregarArticulo()"
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="atributos.nombre"
      :counter="30"
      label="Nombre Artículo"
    ></v-text-field>

    <v-select
      v-model="atributos.categoria"
      :items="categoriaO"
      label="Categoría"
    ></v-select>
        
    <v-select
      v-model="atributos.cantidad"
      :items="cantidadO"
      label="Cantidad"
    ></v-select>

    <v-btn
      color="success"
      class="mr-4"
      type="submit"
    >
      Enviar pedido
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
    >
      Limpiar 
    </v-btn>

 
  </v-form>
</v-container>
</template>

<script>
export default {
  
  data(){
    
    return {
      Atributos:[],

      atributos: {
        nombre:"",
        categoria:"",
        cantidad:"",
      },
      categoriaO:['Videojuegos','Consolas','Computadoras gamer','Ropa','Sillas gamer','Riot points','Comics','Gafas gaming'],
      cantidadO: [1,2,3,4,5]
    }
  },

   methods:{
      agregarArticulo(){
        console.log(this.atributos);

        this.axios
        .post("/nuevo-registro",this.atributos)
        .then((res)=>{
          this.Atributos.push(res.data);
          this.atributos.nombre ="";
          this.atributos.categoria ="";
          this.atributos.cantidad ="";
          alert("Su pedido se ha enviado correctamente")
        })

        .catch((e)=>{
          
          console.log(e.response);

          alert("Error en guardar registro")

        })
      },
    }





}
</script>