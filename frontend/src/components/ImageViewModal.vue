<template>
    <div class="main-container">
        <div class="upload-container">
            <div class="title">
                <span>Uploaded Successfully!</span>
            </div>
            <div class="upload-area">
              <img class="image-preview" :src="this.imageUrl" alt="uploaded-image">
            </div>
            <div class="linkin-part">
              <input id="image-link" type="text" class="image-link" :value="this.imageUrl" />
              <button class="copy-button" @click="copyText()">Copy link</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'ImageViewModal',
    data: function () {
      return {
        imageUrl: ''
      }
    },
    mounted() {
      console.log(process.env.VUE_APP_AWS_URL)
      this.loadLastImage();
    },
  methods: {
      copyText: function () {
        let text = document.getElementById("image-link")
        text.select();
        text.setSelectionRange(0, 99999);
        document.execCommand("copy");
      },
      loadLastImage: function () {
          const URL = this.getBaseURL() + 'upload/load/'
          axios.get(
                  URL
              ).then(
                  response => {
                      if(response.status === 200){
                          this.imageUrl = process.env.VUE_APP_AWS_URL + response.data.image;
                      }
                      else {
                          console.log('Fail ')
                      }
                  }
              )
      }
    }
}
</script>

<style>
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
    .upload-area {
        background: #F6F8FB;
        border: 1px dashed #97BEF4;
        box-sizing: border-box;
        border-radius: 12px;
        height: 15em;
        margin: 2em
    }
    .title {
        font-family: Poppins, sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        margin: 1em auto;
        line-height: 27px;
        /* identical to box height */
        letter-spacing: -0.035em;
    }

    .image-preview {
      object-fit: contain;
      max-width: 100%;
      height: 15em;

    }

    .copy-button {
      border-radius: 5px;
      background-color: #2F80ED;
      color: #ffffff;
      font-family: Poppins, sans-serif;
      padding: 0.5em;
    }

    .linkin-part {
      width: 100%;
    }

    .image-link {
      background-color: #d4d4d4;
      padding: 0.5em;
      border-radius: 5px;
    }
</style>