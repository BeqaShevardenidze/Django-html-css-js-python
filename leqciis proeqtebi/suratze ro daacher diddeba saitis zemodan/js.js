// მოდალური ფანჯრუს გახსნა
function openModal(image) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    
    modal.style.display = "flex";
    modalImg.src = image.src; // არჩეული სურათის დაყენება
}

// მოდალური ფანჯრის დახურვა კლიკის შემდეგ
document.getElementById("imageModal").addEventListener("click", function() {
    this.style.display = "none";
});
