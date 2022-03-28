<template>
    <div class="col-4 mb-3">
        <div class="card">
            <div class="card-body">
                <div class="mb-2">
                    <img v-if="car.img_url" class="img-thumbnail" :src="car.img_url" alt="">
                    <img v-else class="img-thumbnail" src="https://image.shutterstock.com/image-vector/car-monochrome-icon-260nw-755763799.jpg" alt="">
                </div>
                <div class="mb-1"><span class="fw-bold">Brand: </span>{{car.car_model.car_brand.name}}</div>
                <div class="mb-1"><span class="fw-bold">Model: </span>{{car.car_model.name}}</div>
                <div class="mb-1"><span class="fw-bold">Places: </span>{{`${car.places} places`}}</div>
                <div class="mb-1"><span class="fw-bold">Transmission: </span>{{car.is_automatic}}</div>
                <div class="mb-1"><span class="fw-bold">Fuel type: </span>{{car.fuel_type}}</div>
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
