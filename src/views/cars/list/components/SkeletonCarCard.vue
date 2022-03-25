<template>
    <div class="col-4 mb-3">
    <div class="card">
        <div class="card-body">
            <div class="mb-2">
                <div>
                    <Skeletor class="mb-3" width="100%" height="16vw"/>
                </div>
            </div>
                <Skeletor v-for="(el, index) in 6" :key="index" class="mb-3" width="200" height="14" pill/>
        </div>
    </div>
</div>
</template>
<script>
import { Skeletor } from 'vue-skeletor';
export default{

    components: { Skeletor },

}
</script>