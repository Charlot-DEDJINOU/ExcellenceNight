<script>
import { ref } from 'vue'
import { downloadImage } from './untils'

export default {
  name: 'VisuelNight',
  setup() {
    const url_image = ref()
    const name_file = ref({
        name : "Aucun fichier choisi"
    })

    const declancheClick = (e) => {
      e.preventDefault()
      const input_file = document.getElementById('file2')
      input_file.click()
    }

    const InputChange = (event) => {
      name_file.value = event.target.files[0]

      if (name_file.value) {
        const reader = new FileReader()
        reader.onload = (e) => {
          const selectedFile = e.target.result
          url_image.value = selectedFile
        }
        reader.readAsDataURL(name_file.value)
      } else {
        url_image.value = "Aucun fichier choisi"
      }
    }

    return {
      InputChange,
      declancheClick,
      url_image,
      name_file,
      downloadImage
    }
  }
}
</script>

<template>
  <div class="container d-flex flex-column align-items-center">
    <h3 class="my-3 text-center">Nuit de l'excellence  2<sup>ème</sup>  édition</h3>
    <div class="visuel" id="visuel">
        <img class="image" :src="url_image" v-if="name_file.name !== 'Aucun fichier choisi'" />
        <img class="image" src="../assets/robot.jpg" v-if="name_file.name === 'Aucun fichier choisi'" />
    </div>
    <p class="text-center my-2">Merci de choisir une photo de profil</p>
    <div class="my-3 upload">
      <button class="button" id="image" @click="declancheClick">
        Cliquez pour changer la photo
      </button>
      <i>{{ name_file.name }}</i>
    </div>
    <button class="download mb-5" @click="downloadImage()">Telecharger</button>
    <input type="file" id="file2" @change="InputChange" accept="image/*" hidden />
  </div>
</template>
<style>
.container {
    min-height: 100vh;
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
  height: 210px;
  border: 8px solid #fdc722;
  background-size: cover;
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
        zoom: 0.65;
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
