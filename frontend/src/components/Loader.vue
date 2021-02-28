<template>
    <div class="loading">
        <loading
            class="loader"
            :active.sync=isLoading
            :is-full-page=false
            :loader=this.loader
        />
        adddn
    </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
export default {
    name: 'Loader',
    components: {
        Loading
    },
    data (){
        return {
            loader: 'bars'
        }
    },
    props: ['isLoading']
}
</script>