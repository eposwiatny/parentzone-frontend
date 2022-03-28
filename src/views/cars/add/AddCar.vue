<template>
  <div>
    <h1>Add car</h1>

    <div class="card col-6">
      <div class="card-body">
        <form @submit.prevent="submitForm">
        <div class="form-group mb-3">
          <label for="carBrand">Car brand:</label>
          <select @change=loadData() v-model="car.brand" class="form-control" :class="v$.car.brand.$error ? 'invalid-input' : ''" id="carbrand">
            <option v-for="brand in carParams.brands" :key="brand.id" :value="brand.name">{{brand.name}}</option>
          </select>
          <div v-if="v$.car.brand.$error" class="invalid-feedback">Car brand is required</div>
        </div>

        <div class="mb-3">or add brand:</div>

        <div class="form-group mb-3">
          <label for="newBrand">Add brand:</label>
          <input v-model="car.newBrand" class="form-control" id="newBrand" type="text"/>
        </div>

        <div class="form-group mb-3">
          <label for="carModel">Car model:</label>
          <select :disabled="!carParams.models.length || car.newBrand" v-model="car.model" class="form-control" :class="v$.car.model.$error ? 'invalid-input' : ''" id="carModel">
            <option v-for="model in carParams.models" :key="model.id" :value="model.name">{{model.name}}</option>
          </select>
          <div  v-if="v$.car.model.$error" class="invalid-feedback">Car model is required</div>
        </div>

        <div class="mb-3">or add model:</div>

        <div class="form-group mb-3">
          <label for="newModel">Add Model:</label>
          <input v-model="car.newModel" class="form-control" id="newModel" type="text"/>
        </div>


        <div class="form-group mb-3">
          <label for="places">Places</label>
          <input v-model="car.places" class="form-control" :class="v$.car.places.$error ? 'invalid-input' : ''" id="places" type="number" />
          <div v-if="v$.car.places.$error" class="invalid-feedback">Number of place is required</div>
        </div>

        <div class="form-group mb-3">
          <label for="fuelType">Fuel type</label>
          <select v-model="car.fuel_type" class="form-control" :class="v$.car.fuel_type.$error ? 'invalid-input' : ''" id="fuelType">
            <option value="Diesel">Diesel</option>
            <option value="Gasoil">Gasoil</option>
            <option value="Electric">Electric</option>
            <option value="Hybrid">Hybrid</option>
          </select>
          <div v-if="v$.car.fuel_type.$error" class="invalid-feedback">Fuel type is required</div>
        </div>

        <div class="form-group mb-3">
          <label for="description">Description</label>
          <textarea v-model="car.description" class="form-control" :class="v$.car.description.$error ? 'invalid-input' : ''" id="description">Description</textarea>
          <div v-if="v$.car.description.$error" class="invalid-feedback">Description is required</div>
        </div>

        <div class="form-group mb-3">
          <label for="transmission">Transmission</label>
          <select v-model="car.transmission" class="form-control" :class="v$.car.transmission.$error ? 'invalid-input' : ''" id="transmission">
            <option value="1">Automamtic</option>
            <option value="0">Manual</option>
          </select>
          <div v-if="v$.car.description.$error" class="invalid-feedback">Transmission is required</div>
        </div>

        <div class="form-group mb-3">
          <label for="price">Price:</label>
          <input v-model="car.price" class="form-control" id="price" :class="v$.car.price.$error ? 'invalid-input' : ''" type="number" step="0.01" placeholder="0.00"/>
          <div v-if="v$.car.price.$error" class="invalid-feedback">Car price is required</div>
        </div>

        <button class="btn btn-primary d-block w-100" :disabled="submitStatus == 'LOADING'" type="submit" value="Submit">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import axios from 'axios'
export default{

  name: 'add-car',

  data(){
    return{
      car:{
        newBrand: null,
        newModel: '',
        brand: '',
        model: '',
        places: '5',
        fuel_type: 'Diesel',
        description: '',
        transmission: '1',
        price: ''
      },
        carParams:{
          brands: [],
          models: [],
    },
    }
  },

    validations () {
    return {
      car: { 
        brand: { required },
        model: { required },
        places: { required },
        fuel_type: { required },
        description: { required },
        transmission: { required },
        price: { required }
    },
    }
  },

  methods:{
    async submitForm () {
      const isFormCorrect = await this.v$.$validate()
      if (!isFormCorrect) return
      this.submitStatus = 'LOADING'
        axios.post('http://192.168.0.42:8000/api/cars', this.car).then( () => {
        setTimeout(() => {
              this.submitStatus = 'OK'
        }, 700);
      })
    },
    loadData(){
      axios.get(`http://192.168.0.42:8000/api/filters?brand=${this.car.brand}&model=${this.car.model}`).then(response => {
        this.carParams.brands = response.data.brands;
        this.carParams.models = response.data.models;
        if(response.data.models.length){
          this.car.model = response.data.models[0].name
        }
      })
    },
  },
  mounted(){
    this.loadData()
  },
  watch:{
    'car.newBrand': function(){
      if(this.car.newBrand){
        this.car.model = null
      }
     }
  },
  setup () {
    return { v$: useVuelidate() }
  },
}
</script>
<style scoped>
.invalid-feedback{
  display: block;
}
.invalid-input{
  border-color: red !important;
}
</style>