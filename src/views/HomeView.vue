<script setup>
import dataservice from "../services/dataservice.js";
import { ref } from "vue";

const brands = ref([]);
const gyartoproduct  = ref([]);
const kivalasztottGyarto = ref();

dataservice
  .getAllProducts()
  .then((resp) => {
    brands.value = resp.data;
    console.log(brands.value);
  })
  .catch((err) => {
    console.log(err);
  });

// const valaszto = () => {
//   dataservice
//     .kivalasztottGyartoAutoi(kivalasztottGyarto.value)
//     .then((resp) => {
//       gyartoAutoi.value = resp.data;
//       console.log(gyartoAutoi.value);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
</script>

<template>
  <div class="container">
    <h1 class="text-center">Brands</h1>

    <div class="col-8 offset-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4 my-4">
      <label class="form-label">Brands:</label>
      <select
        class="form-select"
      >
        <option v-for="brand in brands">
          {{ brand.name }}
        </option>
      </select>
    </div>
  </div>
</template>
