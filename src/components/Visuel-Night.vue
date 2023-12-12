<script>
import { ref } from 'vue'
import { downloadImage } from './untils'

export default {
  name: 'VisuelNight',
  setup() {
    const url_image = ref("Aucun fichier choisi")

    const declancheClick = (e) => {
      e.preventDefault()
      const input_file = document.getElementById('file2')
      input_file.click()
    }

    const InputChange = (event) => {
      const name_file = event.target.files[0]

      if (name_file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          const selectedFile = e.target.result
          url_image.value = selectedFile
        }
        reader.readAsDataURL(name_file)
      } else {
        url_image.value = "Aucun fichier choisi"
      }
    }

    return {
      InputChange,
      declancheClick,
      url_image,
      downloadImage
    }
  }
}
</script>

<template>
  <div class="container d-flex flex-column justify-content-center align-items-center">
    <h3 class="my-3 text-center">Nuit de l'excellence  2<sup>ème</sup>  édition</h3>
    <div class="visuel" id="visuel">
        <div class="image" :style="{backgroundImage: `url(${url_image})`}" v-if="url_image !== 'Aucun fichier choisi'"></div>
        <div class="image" v-if="url_image === 'Aucun fichier choisi'"></div>
    </div>
    <div class="my-3 upload">
      <button class="button" id="image" @click="declancheClick">
        Cliquez pour changer la photo
      </button>
      <i>{{ url_image }}</i>
    </div>
    <button class="download" @click="downloadImage()">Telecharger</button>
    <input type="file" id="file2" @change="InputChange" accept="image/*" hidden />
  </div>
</template>
<style>
.container {
    height: 100vh;
    color : white ;
}
.container .visuel {
  width: 500px;
  height: 500px;
  background-image: url(../assets/back.jpg);
  background-size: contain;
  background-position: center;
  display: flex;
  justify-content: flex-end;
  align-items: end;
}
.container .visuel .image {
  margin: 0px 10px 50px 0px;
  width: 200px;
  height: 220px;
  border: 8px solid #fdc722;
  background-image: url(../assets/robot.jpg);
  background-size: cover;
  background-position: center;
}
.container .upload {
    width: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.container .upload i {
    width: 200px;
    overflow-x: hidden;
}
.container .upload .button , .container .download {
    background-color: #fdc722;
    color: black;
    padding: 10px ;
    border: none;
    border-radius: 5px;
    width: 250px;
}
.container .download {
    width: 500px;
    font-weight: 600;
}
@media (max-width: 500px) {
    .container .visuel {
        zoom: 0.75;
    }
    .container .upload {
        width: 100%;
        flex-direction: column;
    }
    .container .download , .container .upload .button , i {
        width: 100%;
    }
    i {
        margin: 10px auto;
    }
}
</style>
