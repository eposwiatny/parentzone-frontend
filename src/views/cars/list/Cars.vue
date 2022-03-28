<template>
  <div>
    <h1 class="mb-5">Cars list</h1>
    <FilterBox @updateResults="updateResults" />

    <Sort @setSortingType="setSortingType" />

    <div v-if="loadingStatus === 'LOADING'" class="row">
      <SkeletonCarCard v-for="(car, index) in 4" :key="index" />
    </div>

    <div v-if="loadingStatus === 'OK'" class="row">
      <CarCard v-for="(car, index) in sortedCars" :car="car" :key="index" />
    </div>
  </div>
</template>
<script>
import axios from "axios";
import "vue-skeletor/dist/vue-skeletor.css";
import FilterBox from "@/views/cars/list/components/FilterBox.vue";
import Sort from "@/views/cars/list/components/Sort.vue";
import SkeletonCarCard from "@/views/cars/list/components/SkeletonCarCard.vue";
import CarCard from "@/views/cars/list/components/CarCard.vue";
export default {
  name: "car-card",

  components: { CarCard, FilterBox, SkeletonCarCard, Sort },

  data() {
    return {
      loadingStatus: "LOADING",
      cars: [],
      selectedFilters: {
        brand: "all",
        model: "all",
      },
      sortingType: "any",
    };
  },
  methods: {
    loadData() {
      this.loadingStatus = "LOADING";
      axios
        .get(
          `http://parentback.poswiatny.com/api/cars?brand=${this.selectedFilters.brand}&model=${this.selectedFilters.model}`
        )
        .then((response) => {
          this.cars = response.data.cars;
          setTimeout(() => {
            this.loadingStatus = "OK";
          }, 700);
        });
    },
    updateResults(value) {
      this.selectedFilters = value;
      this.loadData();
    },
    setSortingType(value) {
      this.sortingType = value;
    },
  },
  mounted() {
    this.loadData();
  },
  computed: {
    sortedCars() {
      let tmpCars = this.cars;

      if (this.sortingType == "any") {
        return this.cars;
      } else if (this.sortingType == "pdesc") {
        tmpCars.sort(function (x, y) {
          return x.price - y.price;
        });
      } else if (this.sortingType == "pasc") {
        tmpCars.sort(function (x, y) {
          return y.price - x.price;
        });
      } else if (this.sortingType == "za") {
        tmpCars.sort(function (x, y) {
          if (x.car_model.car_brand.name > y.car_model.car_brand.name) {
            return -1;
          }
          if (x.car_model.car_brand.name < y.car_model.car_brand.name) {
            return 1;
          }
          return 0;
        });
      } else if (this.sortingType == "az") {
        tmpCars.sort(function (x, y) {
          if (x.car_model.car_brand.name < y.car_model.car_brand.name) {
            return -1;
          }
          if (x.car_model.car_brand.name > y.car_model.car_brand.name) {
            return 1;
          }
          return 0;
        });
      }
      return tmpCars;
    },
  },
};
</script>