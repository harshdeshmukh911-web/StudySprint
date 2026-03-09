let synth = window.speechSynthesis;
let voices = [];

function populateVoiceList() {
    voices = synth.getVoices();
    const voiceSelect = document.getElementById('voiceSelect');
    voiceSelect.innerHTML = '';
    voices.forEach((voice, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `${voice.name} (${voice.lang})`;
        voiceSelect.appendChild(option);
    });
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
}

function speak() {
    const text = document.getElementById('text').value;
    if (text === '') return;

    const utterance = new SpeechSynthesisUtterance(text);
    const voiceIndex = document.getElementById('voiceSelect').value;
    utterance.voice = voices[voiceIndex];
    utterance.rate = document.getElementById('rate').value;

    synth.speak(utterance);
}

function stopSpeech() {
    synth.cancel();
}
