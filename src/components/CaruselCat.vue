<template>
  <hooper :settings="hooperSettings">
    <slide class="wrapper" :style="{'--urlimg': 'url(' + posterCat.image + ')'}" v-for="(posterCat, indx) in getPostersCat" :key="indx" :index="indx">
     <div style="width:100%">
<!--        <img class="wrapper__img" width="100%" :src="posterCat.image" alt="">-->
        <h2 class="title title__sag">{{ posterCat.title }}</h2>
     </div>

    </slide>
  </hooper>

</template>

<script>
import {Hooper, Slide} from 'hooper';
import 'hooper/dist/hooper.css';
import posterCat from "../store/poster";

export default {
  data: () => ({
    img: posterCat.image,

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
    getPostersCat() {
      return this.$store.getters['poster/getPostersCat']
    },
    getPosterCat() {
      return this.$store.getters['poster/getPosterCat']
    },

    //getPosters() {
    //return this.$store.getters.getPosters
    //},

  },
  async mounted() {

  },
  created() {
    this.$store.dispatch('poster/getCat');
    
  },
  name: 'Carusel',
  components: {
    Hooper,
    Slide
  }
};
</script>

<style scoped lang="scss">
.wrapper__img{
  height: 100%;
  width: 100%;
  border-radius: 10px;
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
 top: 75%;
 width: 45%;
 
}

@media (min-width:800px) {
  .title {
    font-size: 1.3rem;
  }
}
@media (min-width:1000px) {
  .title {
    font-size: 1.3rem;
  }
}


</style>