<script setup>
import { ref } from 'vue';


import Burger from '@/components/Burger.vue';
import DropdownMenu from '../components/DropdownMenu.vue';
import router from '../router';

const car = ref({
    name: '',
    id: '',
    price: 0,
    options: {
        aircondition: false,
        navigation: false,
        transmission: '',
        person: 0
    },
    image: null,
});

const addcar = () => {
    try {
        fetch('http://localhost:5500/cars', {
            method: 'POST',
            body: JSON.stringify(car.value),
            headers: {
                'Content-Type': 'application/json',
            }
        })

            .then(() => car.value = {
                name: '',
                id: '',
                price: 0,
                options: {
                    aircondition: false,
                    navigation: false,
                    transmission: '',
                    person: 0
                },
                image: null,
            }
            )
            .then(() => {
                router.push({
                    name: 'cars',
                });
            });
    }
    catch (error) {
        console.error('Erreur d\'ajout', error);
    }
}

const showMenu = ref(false);
const toggleMenu = () =>  showMenu.value = !showMenu.value;

</script>

<template>
    <header>
        <p class="back" @click="router.go(-1)"> &lt; Retour</p>
        <h1 class="title">Ajout d'une voiture</h1>
        <Burger @click="toggleMenu" />
    </header>  
    
    <DropdownMenu v-if="showMenu" />

    <div class="container">

        <form @submit.prevent="addcar()" class="flex">

            <div class="input-group">
                <input type="text" id="name" name="name" required class="input" v-model="car.name" />
                <label for="name" class="user-label">Marque et modèle</label>
            </div>

            <div class="input-group">
                <input type="text" id="id" name="id" required class="input" v-model="car.id" />
                <label for="id" class="user-label">Code d'identification</label>
            </div>

            <div class="input-group">
                <input type="number" id="price" name="price" min="0" required class="input" v-model="car.price" />
                <label for="price" class="user-label">Prix</label>
            </div>


            <div class="mydict flex">
                <p>Climatisation :</p>
                <div>

                    <label class="radio-label" for="airconditioned">
                        <input type="radio" id="airconditioned" name="aircondition" v-model="car.options.aircondition" value="true">
                        <span>Avec</span>
                    </label>
                    <label class="radio-label" for="unconditioned">
                        <input type="radio" id="unconditioned" name="aircondition" v-model="car.options.aircondition" value="false">
                        <span>Sans</span>
                    </label>
                </div>
            </div>

            <div class="mydict flex">
                <p>GPS :</p>
                <div>

                    <label class="radio-label" for="navigation">
                        <input type="radio" name="navigation" id="navigation" v-model="car.options.navigation"  value="true">
                        <span>Avec</span>
                    </label>
                    <label class="radio-label" for="nonav">
                        <input type="radio" name="navigation" id="nonav" v-model="car.options.navigation" value="false">
                        <span>Sans</span>
                    </label>
                </div>
            </div>

            <div class="mydict flex">
                <p>Transmission :</p>
                <div>

                    <label class="radio-label" for="automatic">
                        <input type="radio" name="transmission" id="automatic" v-model="car.options.transmission" value="automatique">
                        <span>Automatique</span>
                    </label>
                    <label class="radio-label" for="manual">
                        <input type="radio" name="transmission" id="manual" v-model="car.options.transmission" value="manuel">
                        <span>Manuel</span>
                    </label>
                </div>
            </div>

            <div class="input-group">
                <input type="number" id="person" name="person" min="0" required class="input" v-model="car.options.person" />
                <label for="person" class="user-label">Nombre de personnes</label>
            </div>

            <!-- <label class="custum-file-upload" for="image">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24">
                        <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                        <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path fill=""
                                d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                                clip-rule="evenodd" fill-rule="evenodd"></path>
                        </g>
                    </svg>
                    <p>Ajouter l'image du véhicule</p>
                </div>

                <input type="file" id="image" name="image" >
            </label> -->

            <div class="input-group">
                <input type="text" id="image" name="image" required class="input" v-model="car.image" />
                <label for="image" class="user-label">Image</label>
            </div>






            <button type="submit" class="button">
                <span class="button__text">Ajouter la voiture</span>
                <span class="button__icon"><svg class="svg" fill="none" height="24" stroke="currentColor"
                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"
                        xmlns="http://www.w3.org/2000/svg">
                        <line x1="12" x2="12" y1="5" y2="19"></line>
                        <line x1="5" x2="19" y1="12" y2="12"></line>
                    </svg></span>
            </button>





        </form>
    </div>
</template>

<style scoped>
form {
    flex-direction: column;
    gap: 1rem;
    border: solid 1.5px #2d4f6c;
    border-radius: 1rem;
    background: none;
    padding: 1rem;
    margin: 2rem;
}

.input-group {
    position: relative;
}

.input {
    border: solid 1.5px #2d4f6c;
    border-radius: 1rem;
    background: none;
    padding: 1rem;
    font-size: 1rem;
    color: #000000;
    transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.user-label {
    position: absolute;
    left: 15px;
    color: #2d4f6cab;
    pointer-events: none;
    transform: translateY(1rem);
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.input:focus,
input:valid {
    outline: none;
    border: 1.5px solid #378eda;
}

.input:focus~label,
input:valid~label {
    transform: translateY(-50%) scale(0.8);
    background-color: #2d4f6c;
    padding: 0 0.5rem;
    color: #ffffff;
    border-radius: 10px;
}

/* radio */
.mydict {
    flex-direction: column;
}

.mydict p {
    font-weight: bold;
    color: #2d4f6c;
}

:focus {
    outline: 0;
    border-color: #2260ff;
    box-shadow: 0 0 0 4px #b5c9fc;
}

.mydict div {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.5rem;
}

.mydict input[type="radio"] {
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}

.mydict input[type="radio"]:checked+span {
    box-shadow: 0 0 0 0.0625em #0043ed;
    background-color: #dee7ff;
    z-index: 1;
    color: #0043ed;
}

.radio-label span {
    display: block;
    cursor: pointer;
    background-color: #fff;
    padding: 0.375em .75em;
    position: relative;
    margin-left: .0625em;
    box-shadow: 0 0 0 0.0625em #b5bfd9;
    letter-spacing: .05em;
    color: #3e4963;
    text-align: center;
    transition: background-color .5s ease;
}

.radio-label:first-child span {
    border-radius: .375em 0 0 .375em;
}

.radio-label:last-child span {
    border-radius: 0 .375em .375em 0;
}



/* add image */
/* .custum-file-upload {
    display: flex;
    flex-direction: column;
    align-items: space-between;
    gap: 20px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border: 2px dashed #2d4f6c;
    background-color: rgba(255, 255, 255, 1);
    padding: 1.5rem 0;
    border-radius: 10px;
    box-shadow: 0px 48px 35px -48px #2d4f6c;
    padding: 1rem;
}

.custum-file-upload .icon {
    display: flex;
    align-items: center;
    justify-content: center;
}

.custum-file-upload .icon svg {
    height: 2rem;
    fill: rgba(75, 85, 99, 1);
}

.custum-file-upload input {
    display: none;
} */


.button {
    --main-focus: #2d8cf0;
    --font-color: #323232;
    --bg-color-sub: #dedede;
    --bg-color: #eee;
    --main-color: #323232;
    position: relative;
    width: 150px;
    height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
    background-color: var(--bg-color);
    border-radius: 10px;
    overflow: hidden;
}

.button,
.button__icon,
.button__text {
    transition: all 0.3s;
}

.button .button__text {
    transform: translateX(22px);
    color: var(--font-color);
    font-weight: 600;
}

.button .button__icon {
    position: absolute;
    transform: translateX(109px);
    height: 100%;
    width: 39px;
    background-color: var(--bg-color-sub);
    display: flex;
    align-items: center;
    justify-content: center;
}

.button .svg {
    width: 20px;
    fill: var(--main-color);
}

.button:hover {
    background: var(--bg-color);
}

.button:hover .button__text {
    color: transparent;
}

.button:hover .button__icon {
    width: 148px;
    transform: translateX(0);
}

.button:active {
    transform: translate(3px, 3px);
    box-shadow: 0px 0px var(--main-color);
}
</style>

