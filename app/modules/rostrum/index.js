'use strict';

// Web Speech API isn't part of ES6 of course
// but still... it's f*****g awesome!
// It's working only in WebKit based browsers, though.
// See: http://caniuse.com/web-speech

class Rostrum {
  // ES6: Default parameters
  constructor(fnFinal  = () => {}, fnInterm = () => {},
              fnResult = () => {}, fnEnd    = () => {}) {
    if (!('webkitSpeechRecognition' in window)) {
      console.warn('webkitSpeechRecognition is not defined');
      this.speechRecognitionSupport = false;
    } else {
      this.speechRecognitionSupport = true;
      // ES6: Map
      this._keywords = new Map();
      this.recognizing = false;
      this.recognition = new webkitSpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;
      this.recognition.onresult = (e) => {
        fnResult(e);
        for (var i = e.resultIndex; i < e.results.length; ++i) {
          let text = e.results[i][0].transcript;
          // log all recognized phrases
          console.log(`Recognition: ${text}`);
          if (e.results[e.results.length-1].isFinal) {
            let haveKeyword = false;
            // ES6: Destructing Assignment
            for (let [regexp, fn] of this._keywords) {
              let match = text.match(regexp);
              if(match) {
                haveKeyword = true;
                fn(match);
              }
            }
            fnFinal(text, haveKeyword);
          } else {
            fnInterm(text);
          }
        }
      }
      this.recognition.onend = (e) => {
        this.recognizing = false;
        fnEnd(e);
      }
      this.recognition.onerror = (e) => {
        switch(e.error) {
          case 'no-speech':
            console.warn('Mic was turned off for AFK!');
            break;
          case 'audio-capture':
            console.warn('You need a mic, dude.');
            break;
          case 'not-allowed':
            console.warn('C\'mon! Let me in!');
            break;
          default:
            console.error(e.error);
        }
        this.recognizing = false;
      }
    }
  }
  start() {
    this.recognizing = true;
    this.recognition.start();
  }
  stop() {
    this.recognizing = false;
    this.recognition.stop();
  }
  setLang(lang) {
    this.recognition.lang = lang;
  }
  addKeyword(regexp, fn) {
    this._keywords.set(regexp, fn);
  }
}

export default Rostrum;
