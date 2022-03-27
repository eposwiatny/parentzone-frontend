<template>
    <h1>View car</h1>

        <div class="card">
            <div class="card-body">

                <div class="row">

                <div class="col-6">
                    <img class="img-thumbnail" :src="car.img_url" alt="">
                </div>

                <div class="col-6">
                <div class="mb-1"><span class="fw-bold">Brand: </span>{{car.car_model.car_brand.name}}</div>
                <div class="mb-1"><span class="fw-bold">Model: </span>{{car.car_model.name}}</div>
                <div class="mb-1"><span class="fw-bold">Places: </span>{{car.places}} places</div>
                <div class="mb-1"><span class="fw-bold">Transmission: </span>{{car.is_automatic}}</div>
                <div class="mb-1"><span class="fw-bold">Fuel type: </span>{{car.fuel_type}}</div>
                <div class="mb-3"><span class="fw-bold">Price: </span>{{car.price}}/h</div>
                <div class="mb-3"><span class="fw-bold">Description: </span>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo itaque non nulla vitae eveniet, blanditiis natus et omnis animi officia minus repellat. Minima aperiam corporis quaerat voluptas. Repellat, quaerat corrupti?</p>
                </div>
                </div>

                </div>

                <h1>Book</h1>

                Calendar will goes here

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
        loadData(){
            axios.get('http://192.168.0.42:8000/api/cars/1').then( response => {
                this.car = response.data.car
            })
        }
    },

    mounted(){
        this.loadData();
    }

}
</script>
