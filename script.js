// Función para abrir el modal
function openModal(imagePath) {
    console.log("Abrir modal con:", imagePath); 
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block";  
    modalImg.src = imagePath;        
  }
  
  // Función para cerrar el modal
  function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
  }
  
  // Cerrar el modal si el usuario hace clic fuera de la imagen
  window.onclick = function(event) {
    const modal = document.getElementById("imageModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
