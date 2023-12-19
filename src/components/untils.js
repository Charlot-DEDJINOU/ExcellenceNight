import { toPng } from 'html-to-image'

export const downloadImage = async () => {
  const visuel = document.getElementById('visuel');

  toPng(visuel, { quality: 1 })
  .then(function (dataUrl) {
    var link = document.createElement('a');
    link.download = "Nuit de l'excellence";
    link.href = dataUrl;
    link.click();
  })
  .catch (function(error)  {
    console.error('Erreur lors du téléchargement de l\'image :', error);
  })
};

