export class SpeechService {
  #voices: SpeechSynthesisVoice[]

  get voices() {
    return this.#voices
  }

  voiceNumber = 0
  #speech = new SpeechSynthesisUtterance()

  constructor() {
    this.#voices = window.speechSynthesis.getVoices()
    console.log(this.#voices)
  }

  speak(content: string): void {
    this.#speech.voice = this.#voices[this.voiceNumber] // Note: some voices don't support altering params
    console.log(
      'voiceNumber:',
      this.voiceNumber,
      this.#voices[this.voiceNumber]
    )
    // msg.voiceURI = "native";
    this.#speech.volume = 1 // 0 to 1
    this.#speech.rate = 1 // 0.1 to 10
    this.#speech.pitch = 2 //0 to 2
    this.#speech.text = content
    this.#speech.lang = 'de-DE'
    this.#speech.onend = function (event) {
      console.log('Finished in ' + event.elapsedTime + ' seconds.')
    }
    speechSynthesis.speak(this.#speech)
  }
}
