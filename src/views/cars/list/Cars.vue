<template>
<div>
    <h1 class="mb-5">Cars list</h1>

    <FilterBox />

    <div class="row">
    <CarCard v-for="(car, index) in cars" :car="car" :key="index" />
    </div>
</div>
</template>
<script>
import FilterBox from '@/views/cars/list/components/FilterBox.vue'
import CarCard from '@/views/cars/list/components/CarCard.vue'
export default{

    name: 'car-card',

    components: { CarCard, FilterBox },

    data(){
        return{
            cars:[
                {
                    id: 1,
                    image: 'url',
                    brand: 'Audi',
                    model: 'A4',
                    places: 4,
                    transmission: 'Automatic',
                    fuel: 'Diesel',
                    price: 450
                },
                {
                    id: 2,
                    image: 'url',
                    brand: 'BMW',
                    model: 'Series 3',
                    places: 5,
                    transmission: 'Automatic',
                    fuel: 'Gasoil',
                    price: 450
                },
                {
                    id: 3,
                    image: 'url',
                    brand: 'Mercedes',
                    model: 'A45',
                    places: 5,
                    transmission: 'Manual',
                    fuel: 'Gasoil',
                    price: 450
                },
                {
                    id: 1,
                    image: 'url',
                    brand: 'Audi',
                    model: 'A4',
                    places: 4,
                    transmission: 'Automatic',
                    fuel: 'Diesel',
                    price: 450
                },
                {
                    id: 2,
                    image: 'url',
                    brand: 'BMW',
                    model: 'Series 3',
                    places: 5,
                    transmission: 'Automatic',
                    fuel: 'Gasoil',
                    price: 450
                },
                {
                    id: 3,
                    image: 'url',
                    brand: 'Mercedes',
                    model: 'A45',
                    places: 5,
                    transmission: 'Manual',
                    fuel: 'Gasoil',
                    price: 450
                }
            ]
        }
    }
}
</script>