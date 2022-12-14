const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt to select media stream, pass to video element and play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catch Error here
  }
}
button.addEventListener("click", async () => {
  // Disable Button when clicked
  button.disabled = true;
  // Start picture in picture
  await videoElement.requestPictureInPicture();
  //   Reset Buttom
  button.disabled = false;
});
// On Load
selectMediaStream();
