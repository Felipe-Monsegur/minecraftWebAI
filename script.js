// Obtener las secciones del Nether y del End
const netherSection = document.querySelector('.nether');
const endSection = document.querySelector('.end');

// Detectar el evento de scroll
window.addEventListener('scroll', () => {
  // Obtener la posición vertical de la ventana
  const scrollPosition = window.scrollY;

  // Obtener la altura de la ventana
  const windowHeight = window.innerHeight;

  // Calcular la posición de cada sección
  const overworldPosition = document.querySelector('.overworld').offsetTop;
  const netherPosition = document.querySelector('.nether').offsetTop
