import domtoimage from 'dom-to-image';

export const downloadImage = async () => {
  const visuel = document.getElementById('visuel');

  try {
    const dataUrl = await domtoimage.toPng(visuel);
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = "Nuit de l'excellence";
    link.click();
  } catch (error) {
    console.error('Erreur lors du téléchargement de l\'image :', error);
  }
};
