<template>
    <h1>View car</h1>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-12 col-lg-6 mb-4">
                    <img v-if="car.img_url" class="img-thumbnail" :src="car.img_url" alt="">
                    <img v-else class="img-thumbnail" src="https://image.shutterstock.com/image-vector/car-monochrome-icon-260nw-755763799.jpg" alt="">
                </div>
                <div class="col-12 col-lg-6">
                    <div class="mb-1"><span class="fw-bold">Brand: </span>{{car.car_model.car_brand.name}}</div>
                    <div class="mb-1"><span class="fw-bold">Model: </span>{{car.car_model.name}}</div>
                    <div class="mb-1"><span class="fw-bold">Places: </span>{{car.places}} places</div>
                    <div class="mb-1"><span class="fw-bold">Transmission: </span>{{carTransmission(car.is_automatic)}}</div>
                    <div class="mb-1"><span class="fw-bold">Fuel type: </span>{{car.fuel_type}}</div>
                    <div class="mb-3"><span class="fw-bold">Price: </span>{{car.price}}€/h</div>
                    <div class="mb-3"><span class="fw-bold">Description: </span>
                    <p>{{car.description}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="js">
import axios from 'axios'
export default{

    name: 'view-car',

    data(){
        return{
            car: {
                id: null,
                img_url: '',
                places: '',
                is_automatic: '',
                fuel_type: '',
                price: null,
                car_model: {
                    name: '',
                    car_brand: {
                        name: ''
                    }
                }
            }
        }
    },

    methods:{
        carTransmission(value){
           return value ? 'Automatic' : 'Manual'
        },
        loadData(){
            axios.get(`http://192.168.0.42:8000/api/cars/ ${this.$route.params.id}`).then( response => {
                this.car = response.data.car
            })
        }
    },

    mounted(){
        this.loadData();
    }

}
</script>
