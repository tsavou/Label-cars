<script setup>
import { ref } from 'vue';
import { getCars } from '../services/api';
import Carcard from '@/components/Carcard.vue';
import { useRoute } from 'vue-router';
import router from '../router';


const cars = ref([]);

getCars().then((response) => {
    cars.value = response;
    applyFilters();
});

const filter = ref(false);

const min = ref(0);
const max = ref(0);
const pmin = ref(0);
const pmax = ref(0);
const auto = ref(false);
const manual = ref(false);
const aircondition = ref(false);
const gps = ref(false);

const filteredCars = ref([...cars.value]);

const applyFilters = () => {
    filteredCars.value = cars.value.filter((car) => {
        const priceFilter = (!min.value || car.price >= min.value) && (!max.value || car.price <= max.value);
        const personFilter = (!pmin.value || car.options.person >= pmin.value) && (!pmax.value || car.options.person <= pmax.value);
        const transmissionFilter = !auto.value || car.options.transmission === 'automatique';
        const manualFilter = !manual.value || car.options.transmission === 'manuel';
        const airconditionFilter = !aircondition.value || car.options.aircondition;
        const gpsFilter = !gps.value || car.options.navigation;
        return priceFilter && personFilter && transmissionFilter && manualFilter && airconditionFilter && gpsFilter;
    });  
};


</script>
<template>
    <header>
        <p @click="router.go(-1)"> &lt; Retour</p>
        <h1>Nos véhicules</h1>
        <p @click="filter = !filter">Filtres</p>
    </header>

    <div v-if="filter" class="filter container flex">
        <div class="price-filter">
            <p>Prix:</p>
            <label for="price">min</label>
            <input type="number" id="price" v-model="min" @input="applyFilters">
            <label for="price">max</label>
            <input type="number" id="price" v-model="max" @input="applyFilters">
        </div>
        <div class="price-filter">
            <p>Personnes:</p>
            <label for="person">min</label>
            <input type="number" id="person" v-model="pmin" @input="applyFilters">
            <label for="person">max</label>
            <input type="number" id="person" v-model="pmax" @input="applyFilters">
        </div>

        <div class="check-filter">
            <div class="filter-group">
                <label for="transmission"> Automatique</label>
                <input class="switch" type="checkbox" id="transmission" v-model="auto" @change="applyFilters">
            </div>
            <div class="filter-group">
                <label for="manual"> Manuel</label>
                <input class="switch" type="checkbox" id="manual" v-model="manual" @change="applyFilters">
            </div>

            <div class="filter-group">
                <label for="climatisation">Climatisation</label>
                <input class="switch" type="checkbox" id="climatisation" v-model="aircondition" @change="applyFilters">
            </div>

            <div class="filter-group">
                <label for="navigation">GPS</label>
                <input class="switch" type="checkbox" id="navigation" v-model="gps" @change="applyFilters">
            </div>
        </div>


    </div>

    <div class="container">
        <div class="cars-list flex">
            <div v-for="car in filteredCars" :key="car.id" >
                <Carcard :car="car" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.cars-list {
    flex-wrap: wrap;
    gap: 2rem;
}

.filter {
    flex-direction: column;
    gap: 1rem;

}

.price-filter {
    display: flex;
    gap: 1rem;
}

.price-filter input {
    width: 4rem;
    text-align: center;
    border: solid 1px #2d4f6c;
    border-radius: 10px;
}

.check-filter {
    display: flex;
    gap: 1rem;

}

.filter-group {
    display: flex;
    align-items: center;
    gap: 1rem;

}

.switch {
    position: relative;
    height: 1.5rem;
    width: 3rem;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    border-radius: 9999px;
    background-color: rgba(100, 116, 139, 0.377);
    transition: all .3s ease;
}

.switch:checked {
    background-color: #2d4f6c;
}

.switch::before {
    position: absolute;
    content: "";
    left: calc(1.5rem - 1.6rem);
    top: calc(1.5rem - 1.6rem);
    display: block;
    height: 1.6rem;
    width: 1.6rem;
    cursor: pointer;
    border: 1px solid rgba(100, 116, 139, 0.527);
    border-radius: 9999px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 3px 10px rgba(100, 116, 139, 0.327);
    transition: all .3s ease;
}

.switch:hover::before {
    box-shadow: 0 0 0px 8px #2d4f6c2e;
}

.switch:checked:hover::before {
    box-shadow: 0 0 0px 8px #2d4f6c2e;
}

.switch:checked:before {
    transform: translateX(100%);
    border-color: #2d4f6c;
}
</style>