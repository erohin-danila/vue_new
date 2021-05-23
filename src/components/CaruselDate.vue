<template>
  <hooper :settings="hooperSettings">
    <slide class="wrapper" :style="{'--urlimg': 'url(' + posterDate.image + ')'}" v-for="(posterDate, indx) in getPostersDate" :key="indx" :index="indx">
     <div style="width:100%">
<!--        <img class="wrapper__img" width="100%" :src="posterCat.image" alt="">-->
        <h2 class="title title__sag">{{ posterDate.title }}</h2>
     </div>

    </slide>
  </hooper>

</template>

<script>
import {Hooper, Slide} from 'hooper';
import 'hooper/dist/hooper.css';
import posterDate from "../store/poster";

export default {
  data: () => ({
    img: posterDate.image,

    hooperSettings: {
      itemsToShow: 1.5,
      breakpoints: {
        500: {
          itemsToShow: 2
        },
        800: {
          itemsToShow: 3
        },
        1000: {
          itemsToShow: 4
        }
      }
    }

  }),
  methods: {},

  computed: {
    getPostersDate() {
      return this.$store.getters['poster/getPostersDate']
    },
    getPosterDate() {
      return this.$store.getters['poster/getPosterDate']
    },

    //getPosters() {
    //return this.$store.getters.getPosters
    //},

  },
  async mounted() {

  },
  created() {
    this.$store.dispatch('poster/getDate');
    
  },
  name: 'Carusel',
  components: {
    Hooper,
    Slide,
  }
};
</script>

<style scoped lang="scss">
slide{
  outline: none;
}
.wrapper__img{
  height: 100%;
  width: 100%;
  border-radius: 10px;
  filter: blur(1px);
}
.carusel-img {
  width: 100%;
}

.wrapper {
  margin-right: 15px;
  width: 170px;
  height: 200px;
/* background: radial-gradient(circle at 65% 15%, aqua, darkblue); */
background-color: #FFE698;
opacity: 0.9;
border: 1px gray solid;
  background-image: var(--urlimg);
 
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
}
.hooper-slide{
    
}
.title {
  margin-top: 10px;
  margin-left: 10px;
  font-size: 1rem;
  color: white;
  text-shadow: black 2px 2px 4px;

}
.title__sag{
  position: absolute;
  top: 65%;
  width: 45%;

}

@media (min-width:800px) {
  .title__sag {
    font-size: 1rem;
    width: 35%;
  }
}
@media (min-width:1000px) {
  .title__sag {
    font-size: 1rem;
    width: 20%;
  }
}
@media (min-width: 1900px){
  .title__sag{
    top: 70%;
    width: 35%;
  }

}

</style>