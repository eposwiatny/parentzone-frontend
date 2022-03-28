<template>
<div class="card mb-3">
  <div class="card-body">
    <div class="row align-items-end">
      <div class="col-5">
        <div class="form-group">
        <label for="carBrand">Car brand:</label>
          <select @change=loadData() v-model="selectedFilters.brand" class="form-control" id="carbrand">
            <option value="all">All</option>
            <option v-for="brand in filters.brands" :key="brand.id" :value="brand.name">{{brand.name}}</option>
          </select>
        </div>
      </div>
      <div class="col-5">
        <div class="form-group">
          <label for="carModel">Car model:</label>
          <select v-model="selectedFilters.model" class="form-control" id="carModel">
            <option value="all">All</option>
            <option v-for="model in filters.models" :key="model.id" :value="model.name">{{model.name}}</option>
          </select>
        </div>
      </div>
      <div class="col-2">
        <button @click=filterResults() class="btn btn-primary w-100">Search</button>
      </div>
    </div>
  </div>
</div>
</template>
<script lang="js">
import axios from 'axios'
export default{
    
    name: 'filter-box',

    data(){
      return{
        selectedFilters:{
          brand: 'all',
          model: 'all',
        },
        filters: {
          brands: [],
          models: [],
        }
      }
    },

    methods:{
      loadData(){
        axios.get(`http://parentback.poswiatny.com/api/filters?brand=${this.selectedFilters.brand}&model=${this.selectedFilters.model}`).then(response => {
          this.filters.brands = response.data.brands;
          this.filters.models = response.data.models;
        })
          this.selectedFilters.model = 'all'
          this.$forceUpdate();
      },
      filterResults(){
        this.$emit('updateResults', this.selectedFilters)
      }
    },

    mounted(){
      this.loadData();
    }

}
</script>