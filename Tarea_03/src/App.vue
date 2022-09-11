<template>
  <div id="app" class="text-center">
    <div><h1 class="main-title">Peruvian Secret Food</h1></div>
    <div class="d-flex justify-content-center">
        <div v-for="producto in meals" :key="'prod-'+producto.id">
            <MealCard class="card"
            :producto="producto"
            ></MealCard>
        </div>
    </div>
    <br>
    <div class="row justify-content-center">
        <table class="border border-danger">
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Oferta</td>
                    <td>Opcionales</td>
                    <td>Precio</td>
                    <td>Tamaño</td>
                    <td>Elegir</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,i) in prodList" :key="'item'+i" :class="getColor(i)">
                        <td>{{i + 1}}</td>
                        <td :class="item.oferta ? 'green':'red'">{{item.oferta ? 'SI' : 'NO'}}</td>
                        <td>Aliño {{item.name}}</td>
                        <td>${{item.price}}</td>
                        <td :style="tamañoColor(tamaño(item.width,item.height))">{{tamaño(item.width,item.height)}}</td>
                        <td><button @click="toggleOferta(item)">Agregar extra</button></td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script>
import MealCard from './components/MealCard.vue'

export default {
  name: 'App',
  components: {
    MealCard
  },
  data() {
    return {
      bool1:true,
        bool2:false,
        bool3:false,
        html: '<h3> {{titulo}} </h3>',
        num:0,
        sum:10,
        style:'green bg-red',
        list:[
            ['a','b','c'],
            ['d','e','f'],
            ['i','h','g'],
        ],
        classes:{
            'blue':true,
            'bold':true
        },
        styles:{
            'color':'red',
            'font-size':'32px'
        },
        prodList:[
            {oferta:false,id:1,name:'Limón',width:20,height:50,price:10},
            {oferta:false,id:2,name:'Ají',width:16,height:45,price:9},
            {oferta:false,id:3,name:'Mayonesa',width:13,height:23,price:8},
            {oferta:false,id:4,name:'Vinagreta',width:25,height:33,price:7},
            {oferta:false,id:5,name:'Guacamole',width:10,height:42,price:7},
            {oferta:false,id:6,name:'Huancaina',width:30,height:32,price:8},
        ],
        meals: [
            {
                id: 1,
                titulo: "Pollo a la brasa con papas",
                costo: 50.00,
                portada: "https://www.comida-peruana.com/base/stock/Recipe/218-image/218-image_web.jpg"
            },
            {
                id: 2,
                titulo: "Bistec a lo pobre",
                costo: 60.00,
                portada: "https://iperu.pe/wp-content/uploads/2019/08/bistec-a-lo-pobre_800x534.jpg"
            },
            {
                id: 3,
                titulo: "Anticucho bife peruano",
                costo: 35.00,
                portada: "https://www.peru.travel/Contenido/General/Imagen/pe/61/1.1/Anticucho.jpg"
            },
            {
                id: 4,
                titulo: "Mostrito de chaufa",
                costo: 45.00,
                portada: "https://www.comidastipicasperuanas.com/wp-content/uploads/2022/06/Receta-de-mostrito-de-chaufa-Comidas-Peruanas.jpg"
            }
        ]
        }
    },  
    methods:{
        toggleOferta(item){
            item.oferta = !item.oferta
        },
        tamaño(width,height){
            return (width*height)/2
        },
        tamañoColor(promedio){
            if(promedio >= 400){
                return {'color':'red'}
            }
            if(promedio < 400 && promedio >= 200){
                return {'color':'blue'}
            }
            if(promedio < 200){
                return {'color':'green'}
            }
        },
        getColor(index){
            return index % 2 ? 'gris' : 'blanco'
        },
        sumar10(item){
            item.price += 10
        },
        toggleBool1(){
            this.bool1 = !this.bool1
        },
        toggleBool2(){
            this.bool2 = !this.bool2
        },
        toggleBool3(){
            this.bool3 = !this.bool3
        },
        consola(texto){
            console.log(texto)
            return 'funcion consola'
        },
        sumar(){
            this.num = parseInt(this.num)+parseInt(this.sum)
            this.num = +(this.num)+(this.sum)
            //this.num++
        },
        restar(){
            this.num = parseInt(this.num)-parseInt(this.sum)
            //this.num--
        },
        methodsBool(){
            return false
        },
    },
    computed:{
        computedBool(){
            return (this.bool1 && this.bool2) || this.bool3
        },
        text2(){
            return `<span style="color:red;">coder</span>`
        },
        calculoMatematico(){
            return this.num1
        }
    },    
}
</script>

<style>
  .main-title{
      font-weight: bold;
      padding: 20px;
      background: rgba(246, 94, 64, 0.867);
      text-align: center;
  }
  .card {
      min-width: 220px;
      height: 340px;        
      padding: 20px 10px;
      margin: 10px 10px;
      font-size: large;
      color:grey;
      border-color:palegreen;
      border-style: solid;
      border-width: 1px;
      max-width: 220px;
      background-color: whitesmoke !important;
      transition: 0.7s;
  }
  .card:hover {
      box-shadow: 0 6px 10px 0 rgba(0,0,0,0.2);
      text-align: center;
  }
  .red{
      color: red;
  }
  .bg-red{
      background: red;
  }
  .gris{
      background: #ccc;
  }
  .blanco{
      background: #fff;
  }
  .blue{
      color: blue;
  }
  .green{
      color: green;
  }
  .bold{
      font-weight: bold;
  }
</style>
