<script>
import { RouterLink} from 'vue-router'

</script>


<template>  
  <div class="dropdown-menu">
    <ul class="menu input">
      <li class="menu value"><router-link to="/cars">Véhicules</router-link></li>
      <li class="menu value"><router-link to="/addcar">Ajouter un véhicule</router-link></li>
    </ul>
  </div>
</template>

<style scoped>

/* dropdown menu */

.dropdown-menu {
  position: absolute;
  right: 0;
  z-index: 1;
  background-color: #21262C;
  border-radius: 5px;
  box-shadow: 0 0 0 0.0625em #b5bfd9;
  padding: 0.5rem;

}

.input {
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: #2d4f6c;
  justify-content: center;
  border-radius: 5px
}

.value {
  background-color: transparent;
  border: none;
  padding: 10px;
  color: white;
  display: flex;
  position: relative;
  gap: 5px;
  cursor: pointer;
  border-radius: 4px;
}

.value:not(:active):hover,
.value:focus {
  background-color: #21262C;
}

.value:focus,
.value:active {
  background-color: #1A1F24;
  outline: none;
}

.value::before {
  content: "";
  position: absolute;
  top: 5px;
  left: -10px;
  width: 5px;
  height: 80%;
  background-color: #2F81F7;
  border-radius: 5px;
  opacity: 0;
}

.value:focus::before,
.value:active::before {
  opacity: 1;
}
</style>