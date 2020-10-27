/**Audio Inputs**/
let audioFileInput = document.getElementById("audio-file-input");
let audioPlayer = document.getElementById("audio-file-player");
let toggleMicrophoneButton = document.getElementById("toggle-mike");
let mikeEnabled = false;
//If you want to stream audio to the API, use this, OR use the mike stream function below
let audioStream = {};

//Sets the audio player's audio to the given file
//If you want to send a file to the API, add stuff here (probably)
audioFileInput.addEventListener('change', function(e) {
    let file = e.target.files[0];
    let url = URL.createObjectURL(file);
    audioPlayer.src = url;
});

//Enables or disables microphone input, and streams it to the audio player
toggleMicrophoneButton.addEventListener('click', function() {
    if (mikeEnabled) {
        //Cancel audio player
        audioStream.getTracks().forEach((track) => {
            track.stop();
        });
    } else {
        navigator.mediaDevices.getUserMedia({audio: true, video: false}).then((stream) => {
            audioStream = stream;
            if (window.URL) {
                audioPlayer.srcObject = stream;
            } else {
                audioPlayer.src = stream;
            }
        });
    }
    mikeEnabled = !mikeEnabled;
});
