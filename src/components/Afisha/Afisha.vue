<template>
       <div  class="koren" >
             <div class="block"  v-for="(poster, indx) in getPosters" :key="indx" :index="indx">
                  <div class="block__img">
                      <router-link to="/merop">
                      <img  :src="poster.image" width="100%" onerror="this.onerror=null;this.src=window.fallbackImage" height="100%"  class="block__img--img">
                     
                      </router-link>
                      <div  v-on:click="Isbr" class="block__img__button"><img :src="imgAdress" alt="">
                  </div>
                  </div>
                  <div class="block__info">
                      <div class="block__absaz">
                       {{ poster.title }}
                      </div>
                      <div class="block__dopInfo">
                          <div class="block__dopInfo__category">
                            категория
                          </div>
                          <div class="block__dopInfo__data"> {{poster.date_lower}}</div>
                      </div>
                  </div>
             </div>
            </div>
</template>


<style lang="scss" scoped>
.koren{
 display: grid;
     grid-gap: 10px;
     grid-template-columns: repeat( auto-fit, minmax(300px, 1fr));
}
.block{
    border: 1px solid rgba(0, 0, 0, 0.12);
    margin: auto;
    width: 35%;
    min-width: 296px;
    max-width: 350px;
    height: 320px;
    margin-bottom: 20px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 7px;
    text-decoration: none;
    color: black;
}
.block__img{
 height: 60%;
 width: 100%;
 background-image: url("../../assets/img/not.png");
 background-clip: border-box;
 background-size: contain;
 background-position: center;
 margin-bottom: 7px;
 border-radius: 8px;
 background-color: gray;
}
.block__img--img{
  border-radius: 8px
 }
 .block__info{
     display: flex;
     width: 100%;
     height: 40%;
     flex-direction: column;
     justify-content: space-between;
     
 }
 .block__dopInfo{
     align-items: center;
     display: flex;
     justify-content: space-between;
 }
 .block__absaz{
     margin-bottom: 42px;
 }
 .block__dopInfo__category{
     background-color:#FFAC0B;
     padding: 5px;
     padding-left: 10px;
     padding-right: 10px;
     border-radius: 12px;
 }
 .block__img__button{
     cursor: pointer;
     width: 32px;
     display: flex;
     align-items: center;
     border-radius: 5px;
       justify-content:center;
     height: 32px;
     position: relative;
     top: -185px;
     left: 88%;
     background-color: gray;
 }
 .block__img__button{
     background: rgba(0, 0, 0, 0.3);
border-radius: 6px;
 }
@media screen and (max-width: 970px) {
    .block{
    width:100%;
    }
}

</style>


<script>
import poster from "@/store/poster";
export default{
    data(){
        return{
            imgAdress: require("@/assets/img/isbr.svg"),
            img: poster.image,
        }
    },
 
 methods:{
     Isbr(){
         if( this.imgAdress == require("@/assets/img/Isbr2.svg")){
               this.imgAdress = require("@/assets/img/isbr.svg")
         }else {
               this.imgAdress = require("@/assets/img/Isbr2.svg")
         }
      
     }
 },



computed: {
    getPosters() {
      return this.$store.getters['poster/getPosters']
    },
    getPoster() {
      return this.$store.getters['poster/getPoster']
    },

    //getPosters() {
    //return this.$store.getters.getPosters
    //},

  },
  async mounted() {
    console.log(this.$store.state.posters)
  },
  created() {
    this.$store.dispatch('poster/getAll');

         
      
  },



 }
//   props: {
//       poster:Object
//   }
</script>
