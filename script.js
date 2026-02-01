function openPreview() {
  document.getElementById("previewModal").style.display = "block";
}

function closePreview(e) {
  const modal = document.getElementById("previewModal");

  if (
    e.target === modal ||
    e.target.classList.contains("close")
  ) {
    modal.style.display = "none";

    const audio = modal.querySelector("audio");
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    const modal = document.getElementById("previewModal");
    if (modal.style.display === "block") {
      modal.style.display = "none";

      const audio = modal.querySelector("audio");
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    }
  }
});
