function openPreview() {
  document.getElementById("previewModal").style.display = "block";
}

function closePreview(e) {
  if (
    e.target.classList.contains("preview-modal") ||
    e.target.classList.contains("close")
  ) {
    document.getElementById("previewModal").style.display = "none";
  }
}
