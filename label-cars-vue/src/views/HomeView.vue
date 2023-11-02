<script setup>
import Burger from '@/components/Burger.vue';
import CarCard from '@/components/CarCard.vue';
import DropdownMenu from '../components/DropdownMenu.vue';
import { getCars, countCars } from '../services/api';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const cars = ref([]);
const carsMostReserved = ref([]);
const CarsCount = ref(0);

countCars().then((response) => {
  CarsCount.value = response;
});


getCars().then((response) => {
  cars.value = response;
  carsMostReserved.value = (cars.value.sort((carA, carB) => carB.reservations - carA.reservations)).slice(0, 5);
});

const showMenu = ref(false);
const toggleMenu = () =>  showMenu.value = !showMenu.value;


</script>

<template>
  <header>
    <img alt="logo" class="logo" src="@/assets/logo-transparent.png" />
    <Burger @click="toggleMenu" />
  </header>

  <DropdownMenu v-if="showMenu" />

  <main>
    <div class="container">

      <RouterLink to="/cars">
        <div class="cars-access">
          <img src="@/assets/hero.jpg" alt="">
          <h2>{{ CarsCount }} véhicules à découvrir</h2>
        </div>
      </RouterLink>

      <h2>Les plus réservés</h2>

      <div class="most-reserved-list flex">
        <RouterLink v-for="car in carsMostReserved" :key="car.id" :to="`/cars/${car._id}`">
          <CarCard :car="car" />
        </RouterLink>


      </div>
    </div>




  </main>
</template>

<style scoped>
.cars-access {
  position: relative;
  margin-bottom: 2rem;
}

.cars-access h2 {
  position: absolute;
  bottom: 5%;
  left: 5%;
  color: #fff;
  font-weight: bold;
}

.cars-access img {
  border-radius: 1rem;
}



.most-reserved-list {
  flex-wrap: wrap;
  gap: 2rem;
  z-index: 0;
  overflow-y: auto;
  max-height: 42vh;
}



</style>


