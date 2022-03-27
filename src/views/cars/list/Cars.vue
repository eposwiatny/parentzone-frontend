<template>
<div>
    <h1 class="mb-5">Cars list</h1>
    <FilterBox @updateResults=updateResults />

    <div v-if="loadingStatus === 'LOADING'" class="row">
        <SkeletonCarCard v-for="(car, index) in 4" :key="index" />
    </div>


    <div v-if="loadingStatus === 'OK'" class="row">
    <CarCard v-for="(car, index) in cars" :car="car" :key="index" />
    </div>

</div>
</template>
<script>
import axios from 'axios'
import 'vue-skeletor/dist/vue-skeletor.css';
import FilterBox from '@/views/cars/list/components/FilterBox.vue'
import SkeletonCarCard from '@/views/cars/list/components/SkeletonCarCard.vue'
import CarCard from '@/views/cars/list/components/CarCard.vue'
export default{

    name: 'car-card',

    components: { CarCard, FilterBox, SkeletonCarCard },

    data(){
        return{
            loadingStatus: 'LOADING',
            cars:[],
            selectedFilters: {
                brand: 'all',
                model: 'all'
            }
        }
    },
    methods:{
        loadData(){
            this.loadingStatus = 'LOADING'
            axios.get(`http://192.168.0.42:8000/api/cars?brand=${this.selectedFilters.brand}&model=${this.selectedFilters.model}`).then( response => {
                this.cars = response.data.cars
                setTimeout(() => {
                        this.loadingStatus = 'OK'
                }, 700);
            })
        },
        updateResults(value){
            this.selectedFilters = value
            this.loadData()
        }
    },
    mounted(){
        this.loadData()
    }
}
</script>