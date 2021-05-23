<template>
    <div class="profile">
        <div class="profile__sag">
            <h1>Профиль</h1>
        </div>
        <div class="profile__info">
            <div class="profile__info__block">
               <div class="profile__info__block--sag">Введите e-mail</div>
               <input type="text" class="profile__info__block--sag__vvod">
            </div>
            <div class="profile__info__block">
               <div class="profile__info__block--sag"></div>
               <input type="text" class="profile__info__block--sag__vvod">
            </div>
            <div class="profile__info__block">
               <div class="profile__info__block--sag">Введите логин</div>
               <input type="text" class="profile__info__block--sag__vvod">
            </div>
                <div class="profile__info__block">
               <div class="profile__info__block--sag">Введите пароль</div>
               <div class="group"><input type="text" class="profile__info__block--sag__vvod"></div>
            </div>
             
        </div>
        <div class="button__div">
           <router-link class="margon" to="/registr"> <button class="profile_info_viyti zvet">Регистрация</button></router-link>
           <router-link to="/profile"><button class="profile_info_viyti">Вход</button></router-link>
        </div>
    </div>
</template>


<style lang="scss" >
.margon{
    margin-right: 20px;
}
.profile__sag{
    margin-top: 30px;
}
.button__div{
    display: flex;
    width: 100%;
    justify-content: flex-end;
}
.profile_info_viyti{
    width: 20%;
    padding: 1px;
    border-radius: 4px;
    min-width: 100px;
    max-width: 120px;
    padding-top: 10px;
    padding-bottom:10px;
    background-color: #F83D24;
    border: 0;
    font-size: 1rem;
    color: white;
    margin-top: 250px;
    margin-bottom: 10px;
    margin-right: 20px;
    &:last-child{
        margin-right: 0px;
    }
}
.profile{
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
}
.profile__info__block{
    width: 45%;
    display: flex;
    max-width: 350px;
    flex-direction: column;
}
.profile__info{
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: column;
       align-items: center;
    justify-content: center;
}
.profile__sag{
    h1{
        margin-bottom: 14px;
    }
    p{
        font-size:1.2857rem;
        margin-bottom:30px;
    }
}
.profile__info__block--sag{
     font-size:1.2857rem;
     margin-bottom: 4px;
}
.profile__info__block--sag__vvod{
    border-radius: 8px;
    height: 30px;
    margin-bottom: 8px;
    width: 100%;
}
.profile__info__block--sag__name{
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.63);
}
.profile__info__block__button{
    width: 40%;
    padding: 3px;
    border-radius: 4px;
    min-width: 100px;
    max-width: 120px;
    padding-top: 6px;
    padding-bottom:6px;
    background-color: #FFAC0B;
    border: 0;
    font-size: 1rem;
    color: white;
    
}
.zvet{
   background-color: #FFAC0B;

}
@media screen and (max-width: 886px) {
    .header__logo{
    width: 40%;
}
    .profile{
        width: 100%;
    }
 .profile__info{
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: column;
    max-width: 1000px;
}
.profile__info__block{
    width: 100%;
    max-width: 1000px;
}
.profile_info_viyti{
    margin-top: 200px;
}
}
</style>