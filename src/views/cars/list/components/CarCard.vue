<template>
    <div class="col-4 mb-3">
        <div class="card">
            <div class="card-body">
                <div class="mb-2">
                    <img class="img-thumbnail" src="https://ag-spots-2021.o.auroraobjects.eu/2021/07/04/audi-rs5-sportback-b9-c916204072021112424_1.jpg?1625390676" alt="">
                </div>
                <div class="mb-1"><span class="fw-bold">Brand: </span>{{car.brand}}</div>
                <div class="mb-1"><span class="fw-bold">Model: </span>{{car.model}}</div>
                <div class="mb-1"><span class="fw-bold">Places: </span>{{`${car.places} places`}}</div>
                <div class="mb-1"><span class="fw-bold">Transmission: </span>{{car.transmission}}</div>
                <div class="mb-1"><span class="fw-bold">Fuel type: </span>{{car.fuel}}</div>
                <div class="mb-3"><span class="fw-bold">Price: </span>{{`${car.price}/h`}}</div>
                <router-link class="btn btn-primary w-100" :to="`/view/${car.id}`">View</router-link>
            </div>
        </div>
    </div>
</template>
<script lang="js">
export default{

    name: 'car-card',

    props:{
        car: Object
    }
}
</script>
