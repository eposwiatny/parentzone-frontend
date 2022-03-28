<template>
  <div class="row mb-3">
    <div class="col-2">
      <button @click="setSortingType('pasc')" class="btn btn-primary d-block w-100">Price: Low - Hight</button>
    </div>
    <div class="col-2">
      <button @click="setSortingType('pdesc')" class="btn btn-primary d-block w-100">Price: Hight - Low</button>
    </div>
    <div class="col-2">
      <button @click="setSortingType('az')" class="btn btn-primary d-block w-100">Price: A - Z</button>
    </div>
    <div class="col-2">
      <button @click="setSortingType('za')" class="btn btn-primary d-block w-100">Price: Z - A</button>
    </div>
  </div>
</template>
<script>
export default{


    methods:{
        setSortingType(value){
            this.$emit('setSortingType', value)
        }
    }

}
</script>