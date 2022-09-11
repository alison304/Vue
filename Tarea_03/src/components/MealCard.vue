<template>
  <div align="center">
      <img height="200" :src="producto.portada" :alt="producto.titulo">
      <h3> {{producto.titulo}} </h3>
      <p>$ <b> {{producto.costo}} </b> </p>
      <button class="btn btn-success" @click="console(producto.id)">Me gusta</button>
  </div>
</template>

<script>
export default {
  name: 'MealCard',
  props: {
    producto:Object
  },
  methods:{
        console(id){
            console.log('id',id);
        }
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
