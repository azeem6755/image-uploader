<template>
    <div class="main">
        <image-uploader
            v-if="!this.uploadComplete && !this.uploadFailedVar"
            @imageUploaded="uploadFinished"
            @uploadFailed="uploadFailed" />
        <image-view-modal v-if="this.uploadComplete && !this.uploadFailedVar"/>
        <div v-if="this.uploadComplete && this.uploadFailedVar">
          <p> Upload Failed </p>
          <button @click="tryAgain">Try Again</button>
        </div>
    </div>
</template>

<script>
import ImageUploader from './ImageUploader.vue'
import ImageViewModal from './ImageViewModal.vue'

export default {
    name: 'Main',
    components: {
        ImageUploader,
        ImageViewModal
    },
    data: () => ({
        uploadComplete: false,
        uploadFailedVar: false
    }),
    methods: {
        uploadFinished() {
            console.log('upload finished')
            this.uploadComplete = true
        },
        uploadFailed() {
            console.log('upload failed')
            this.uploadComplete = true
            this.uploadFailedVar = true
        },
        tryAgain() {
            console.log('Trying Again')
            this.uploadComplete = false
            this.uploadFailedVar = false
        }
    }
}
</script>