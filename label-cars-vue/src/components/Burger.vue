
<template>


    <label  class="burger" for="burger">
        <span></span>
        <span></span>
        <span></span>
    </label>



</template>

<style scoped>

.burger {
  position: relative;
  width: 2.8rem;
  height: 2rem;
  background: transparent;
  cursor: pointer;
  display: block;
}


.burger span {
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: rgb(255, 255, 255);
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
}

.burger span:nth-of-type(1) {
  top: 0px;
  transform-origin: left center;
}

.burger span:nth-of-type(2) {
  top: 50%;
  transform: translateY(-50%);
  transform-origin: left center;
}

.burger span:nth-of-type(3) {
  top: 100%;
  transform-origin: left center;
  transform: translateY(-100%);
}





</style>