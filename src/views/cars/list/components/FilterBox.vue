<template>

<div class="card mb-3">
    <div class="card-body">
<div class="row align-items-center">

    <div class="col-2">
        <div class="form-group mb-3">
          <label for="carBrand">Car brand:</label>
          <select class="form-control" id="carbrand">
            <option value="Audi">Audi</option>
            <option value="Mercedes">Merecdes-Benz</option>
            <option value="BMW">BMW</option>
          </select>
        </div>
    </div>

    <div class="col-2">
        <div class="form-group mb-3">
          <label for="carModel">Car model:</label>
          <select class="form-control" id="carModel">
            <option value="Audi">A1</option>
            <option value="Audi">A2</option>
            <option value="Audi">A3</option>
            <option value="Audi">A4</option>
            <option value="Audi">A5</option>
            <option value="Audi">A6</option>
            <option value="Audi">A7</option>
          </select>
        </div>
    </div>

    <div class="col-2">

        <div class="form-group mb-3">
          <label for="places">Places</label>
          <input class="form-control" id="places" type="number" value="42" />
        </div>
        </div>

    <div class="col-2">

        <div class="form-group mb-3">
          <label for="fuelType">Fuel type</label>
          <select class="form-control" id="fuelType">
            <option value="Audi">Diesel</option>
            <option value="Audi">Gasoil</option>
            <option value="Audi">Electric</option>
            <option value="Audi">Hybrid</option>
          </select>
        </div>
        </div>

    <div class="col-2">

        <div class="form-group mb-3">
          <label for="transmission">Transmission</label>
          <select class="form-control" id="transmission">
            <option value="Audi">Automamtic</option>
            <option value="Audi">Manual</option>
          </select>
        </div>
    </div>

    <div class="col-2">

<button class="btn btn-primary w-100">Search</button>
</div>
        </div>
        </div>
        </div>

</template>
<script lang="js">
export default{
    
    name: 'filter-box'

}
</script>