<script setup>
import { getCar } from '../services/api';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import router from '../router';


const route = useRoute();
const carId = route.params.id;
const car = ref({});

getCar(carId).then((response) => {
    car.value = response;
})


</script>
<template>
    <main>

        <header>
            <p class="back" @click="router.go(-1)"> &lt; Retour</p>
            <h1 class="title">{{ car.name }}</h1>
            <div></div>
            
        </header>
        
        <div class="container car">
            
            <img :src="car.image" :alt="car.name">
            
            
            <ul>
                <li><img src="@/assets/icons/engine.png" alt="">{{ car.options.transmission }}</li>
                <li> <img src="@/assets/icons/doors.png" alt="">{{ car.options.person }} personnes</li>
                <li v-if="car.options.navigation"> <img src="@/assets/icons/compass.png" alt=""> GPS intégré</li>
                <li v-else>GPS non intégré <img src="@/assets/icons/compass.png" alt=""> </li>
                <li v-if="car.options.aircondition"> <img src="@/assets/icons/snow.png" alt="">véhicule climatisé</li>
                <li v-else><img src="@/assets/icons/snow.png" alt="">sans climatisation</li>
                
            </ul>
        </div>
        
        
        <footer class="flex">
            <p>{{ car.price }}€ / jour</p>
            
            
        </footer>
    </main>
</template>

<style scoped>

main {
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-between;

}

header a {
    font-size: 1.3rem;
}



.title {
    text-align: center;
}
.car {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex:1;
    gap:4rem;

}

ul {
    display: flex;
    gap: 4rem;
    flex-wrap: wrap;
    padding: 5rem 1rem;
}

li {
    flex-basis: calc(100% / 2 - 2rem);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    
}

li img{
    width: 3rem;
}
footer {
  color: #fff;
  padding: 1rem;
  background-color: #2d4f6c;
  font-size: 2rem; 
}

</style>