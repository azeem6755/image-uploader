<template>
    <div class="main">
        <loader :isLoading="this.loading" v-if="this.loading" />
        <image-uploader v-if="!this.uploadComplete && !this.loading" v-on:imageUploaded="uploadFinished" v-on:uploadStart="startLoading"/>
        <image-view-modal v-if="this.uploadComplete && !this.loading"/>
    </div>
</template>

<script>
import ImageUploader from './ImageUploader.vue'
import ImageViewModal from './ImageViewModal.vue'
import Loader from './Loader.vue'

export default {
    name: 'Main',
    components: {
        ImageUploader,
        ImageViewModal,
        Loader
    },
    data: () => ({
        loading: false,
        uploadComplete: false,
    }),
    methods: {
        startLoading() {
            console.log('start loading')
            this.loading = true
        },
        stopLoading() {
            this.loading = false
        },
        uploadFinished() {
            console.log('upload finished')
            this.uploadComplete = true
            this.loading = false
        }
    }
}
</script>