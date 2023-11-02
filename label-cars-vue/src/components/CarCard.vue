<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { defineProps } from 'vue'
import router from '../router'

defineProps(['car'])


const deleteCar = (id) => {
    try {
        fetch('http://localhost:5500/cars/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(() => {
                router.go(0)
            })
    }
    catch (error) {
        console.error('Erreur de suppression', error);
    }
}

</script>

<template>
    <div
        class="w-60 h-80 bg-slate-500 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
        <div class="w-52 h-40 bg-slate-200 rounded-2xl">
            <img :src="car.image" :alt="car.name">
        </div>
        <div class="text-white">
            <p class="font-medium">{{ car.name }}</p>
            <p class="font-extrabold">{{ car.price }}€</p>
        </div>
        <div class="flex gap-4">

            <RouterLink :to="`/cars/${car._id}`">
                <button class="bg-sky-700 font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">Voir plus
                </button>
            </RouterLink>
            <button @click="deleteCar(car._id)"
                class="flex justify-center items-center gap-2 w-10 h-10 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]">
                <svg viewBox="0 0 15 15" class="w-5 fill-white">
                    <svg class="w-6 h-6" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            stroke-linejoin="round" stroke-linecap="round"></path>
                    </svg>
                   
                </svg>
            </button>
        </div>


    </div>
</template>

