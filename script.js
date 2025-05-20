const colorInput = document.getElementById("colorInput");
const previewBox = document.getElementById("previewBox");
const colorCode = document.getElementById("colorCode");

colorInput.addEventListener("input", function () {
  const selectedColor = colorInput.value;
  previewBox.style.backgroundColor = selectedColor;
  colorCode.textContent = selectedColor;
});

function copyColor() {
  const hex = colorCode.textContent;
  navigator.clipboard.writeText(hex).then(() => {
    alert("Color code copied: " + hex);
  });
}
