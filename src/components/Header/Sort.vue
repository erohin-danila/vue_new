<template>
    <div class="sortirovka">
        <div class="sortirovka__info">
         <div class="header__poisk poisk_two"><Poisk/></div>
         <div class="sortirovka__block"><span class="sortirovka__text">Категории</span><select name="select">
             <option value="value1"  selected>без сортировки</option>
             <option value="value2" >Кино</option>
             <option value="value3">Концерты</option>
              <option value="value3">Спектакли</option>
               <option value="value3">Выставки</option>
                <option value="value3">Библиотеки</option>
                 <option value="value3">Фестивали</option>
                  <option value="value3">Музеи</option>
           </select></div>
      <div class="sortirovka__block"><span class="sortirovka__text">Дата</span><select name="select">
             <option value="value1"  selected>без сортировки</option>
             <option value="value2" >от большего к меньшему</option>
             <option value="value3">от меньшего к большему</option>
           </select></div>
       <div class="sortirovka__block"><span class="sortirovka__text">Цена</span><select name="select">
             <option value="value1"  selected>без сортировки</option>
             <option value="value2" >от большего к меньшему</option>
             <option value="value3">от меньшего к большему</option>
           </select></div>
      
        </div>
    </div>
</template>

<style lang="scss" scoped>
select{
  border-radius: 10px;
  background-color: white;
  max-width: 100px;
}
.header__poisk{
  display: none;
}
  .sortirovka{
    border-radius: 0px 0px 10px 10px;
    width: 47%;
    padding-top: 30px;
    padding-bottom: 15px;
    padding-left: 15px;
    padding-right: 15px;
   border: 1px solid #000000;
   display: flex;
   border-left: 0;
   border-right: 0;
   justify-content: space-between;
   align-items: center;
   border-top:0;
  }
   .sortirovka__info{
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
 .sortirovka__text{
       margin-right: 5px;
    }
  @media screen and (max-width: 886px) {
    .poisk_two{
      display: block;
    }
    .sortirovka{
        width: 100vw;
        height: 99vh;
       background: rgba(0, 0, 0, 0.9);
       border-radius:0;
       padding-left: 0;
       padding-right: 0;
       
    }
    .sortirovka__text{
        margin-bottom: 30px;
        font-size: 1.5rem;
    }
    select{
     padding: 10px;
     max-width: 10000px;
    }
    .sortirovka__info{
        padding-top: 5vh;
        align-items: center;
          display: flex;
          position: absolute;
          border-radius: 22px 22px 0px 0px;
         top:50vh;
      width:100%;
      flex-direction: column;
        background-color: white;
        height: 50vh;
        padding-bottom: 40px;
    }
    .header__poisk{
    width: 55%;
    position: relative;
    z-index: 999;
    display: flex;

    input{
        width: 100%;
        border-radius: 20px;
        padding-top:10px;
         outline:none;
        padding-bottom: 10px;
        padding-left: 35px;
        background: url("https://www.iconninja.com/files/647/860/906/search-icon.png")  no-repeat 3px 1px;
        background-position: 10px;
        background-size: 20px;
    }
}
 
 }


</style>

<script>
import Poisk from "@/components/Header/Poisk.vue"
export default{
methods:{
     openSort(){
        this.sortActive = !this.sortActive;
        this.showSort = !this.showSort
     }},
     components:{
        Poisk
     }
     }
</script>
