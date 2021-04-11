<template>
    <div class="main-container">
        <div class="upload-container">
          <loader
            v-if="this.loading"
            :isLoading="this.loading" />
          <div v-else>
            <div class="title">
                <span>Upload your Image</span>
            </div>
            <div class="sub-title">
                <span class="sub-title">File should be Jpeg, Png,...</span>
            </div>
            <div class="upload-area">
            </div>
            <div class="upload-or">
                <span class="or-text">OR</span>
            </div>
            <div class="upload-btn">
                <input type="file" id="file-upload-button" accept="image/*" @change="uploadImage($event)" hidden/>
                <label for="file-upload-button" class="file-upload-label">Choose a file</label>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Loader from './Loader.vue'

export default {
    data: () => ({
        loading: false
    }),
    components: {
      Loader
    },
    name: 'ImageUploader',
    methods: {
        uploadImage(event) {
            this.loading = true;
            const URL = 'http://localhost:8000/upload/'
            let data = new FormData()
            data.append('image', event.target.files[0])
            let config = {
                header: {
                    'Content-Type': 'image/*'
                }
            }
            axios.post(
                URL,
                data,
                config
            ).then(
                response => {
                    if(response.status === 201){
                        console.log('Image uploaded')
                        this.loading = false;
                        this.$emit('imageUploaded')
                    }
                    else if(response.status === 400){
                        console.log('Image upload fail')
                        this.$emit('uploadFailed')
                    }
                    else {
                        console.log(' ')
                    }
                }
            )
            
        },
        loadImage(img) {
            let image = document.getElementById('output')
            image.src = URL.createObjectURL(img)
        }
    }
}
</script>

<style scoped>
    .main-container {
        margin: auto;
    }
    .upload-container {
        margin: 12em auto;
        width: 402px;
        height: 469px;

        background: #FFFFFF;
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
        border-radius: 12px;
        padding: 1em;
    }
    .title {
        font-family: Poppins;
        font-style: normal;
        width: 33%;
        font-weight: 500;
        font-size: 18px;
        margin: 0 auto;
        line-height: 27px;
        /* identical to box height */

        letter-spacing: -0.035em;
    }
    .sub-title {
        width: 50%;
        height: 14.99px;
        margin: 0 auto;

        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 15px;
        /* identical to box height */

        text-align: center;
        letter-spacing: -0.035em;

        /* Gray 3 */

        color: #828282;
    }

    .upload-btn {
        margin: 2em auto;
        background: #2F80ED;
        border-radius: 8px;
        width: 8em;
        text-align: center;
        padding: 1em;
    }

    label {
        font-family: Noto Sans;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        letter-spacing: -0.035em;

        color: #FFFFFF;
    }

    .upload-area {
        background: #F6F8FB;
        border: 1px dashed #97BEF4;
        box-sizing: border-box;
        border-radius: 12px;
        height: 13em;
        margin: 2em
    }

    .upload-or {
        text-align: center;
        margin: 0 auto;
    }

    .or-text {
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        /* identical to box height */

        text-align: center;
        letter-spacing: -0.035em;

        /* Gray 4 */

        color: #BDBDBD;
    }

    .loader {
        position: absolute;
        left: 46.06%;
        right: 46.02%;
        top: 44.06%;
        bottom: 50.36%;
        z-index: 10;
    }
</style>