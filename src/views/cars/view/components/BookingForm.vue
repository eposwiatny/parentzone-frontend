<template>
    <DatePicker v-model="date" />

<div class="row">

    <div class="col-6">
        <div class="form-group mb-3">
          <label for="firstName">First name:</label>
          <input class="form-control" id="firstName" type="text" placeholder="First name"/>
        </div>
    </div>

    <div class="col-6">
        <div class="form-group mb-3">
          <label for="lastName">Last name:</label>
          <input class="form-control" id="lastName" type="text" placeholder="Last name"/>
        </div>
    </div>

    <div class="col-12">
        <div class="form-group mb-3">
          <label for="email">Email:</label>
          <input class="form-control" id="email" type="email" placeholder="exemple@parentzonde.com"/>
        </div>
    </div>

    <div class="col-12">
        <div class="form-group mb-3">
          <label for="Phone number">Phone</label>
          <input class="form-control" id="phone" type="text" placeholder="0489000000"/>
        </div>
     </div>



    </div>



        <input class="btn btn-primary" type="submit" value="Submit" />



</template>
<script lang="js">
import 'v-calendar/dist/style.css';
import { DatePicker } from 'v-calendar';
export default{

    components: {
        DatePicker,
    },

    data(){
        return{
            date: new Date()
        }
    }

}

</script>