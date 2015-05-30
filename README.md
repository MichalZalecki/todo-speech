# TODO Speech

Another TODO app but this time I made use of **Web Speech API**. Created as an ES6 [Devmeetings](http://devmeetings.pl) example.

## Installation

Run `npm install` to install dependencies and `npm start` to run dev server via **webpack**.

## ES6 Examples

* Arrow function
* Class
* Default parameters
* Destructing Assignment
* Enhanced Object Literals
* Let keyword
* Map (data structure)
* Modules
* Template literal

```javascript
todo-speech/app/main.js:
    1  'use strict';
    2  
    3: // ES6: Modules
    4: // imports in Wop wop ES6 style!
    5  import './style.scss';
    6  import * as todoForm from 'todo-form';
    .
    8  import Rostrum from 'rostrum';
    9  
   10: // ES6: Let keyword
   11  let listCtrl = new TodoListCtrl();
   12  
   13: // ES6: Arrow function
   14  let handleSubmission = () => {
   15    // add todo to the list

todo-speech/app/modules/rostrum/index.js:
    1  'use strict';
    2  
    3: // Web Speech API isn't part of ES6 of course
    4  // but still... it's f*****g awesome!
    5  // It's working only in WebKit based browsers, though.
    .
    7  
    8  class Rostrum {
    9:   // ES6: Default parameters
   10    constructor(fnFinal  = () => {}, fnInterm = () => {},
   11                fnResult = () => {}, fnEnd    = () => {}) {
   ..
   15      } else {
   16        this.speechRecognitionSupport = true;
   17:       // ES6: Map
   18        this._keywords = new Map();
   19        this.recognizing = false;
   ..
   29            if (e.results[e.results.length-1].isFinal) {
   30              let haveKeyword = false;
   31:             // ES6: Destructing Assignment
   32              for (let [regexp, fn] of this._keywords) {
   33                let match = text.match(regexp);

todo-speech/app/modules/todo-form/index.js:
   42  });
   43  
   44: // ES6: Enhanced Object Literals
   45  export default { form: todoForm,
   46    contentFieldFinal,

todo-speech/app/modules/todo-list/index.js:
    3  require('./todo-list.scss');
    4  
    5: // ES6: Class
    6  class TodoListCtrl {
    7    constructor() {
    .
   17  
   18      let todoItemOrder = document.createElement('span');
   19:     // ES6: Template literal
   20      todoItemOrder.innerHTML = `#${index}`;
   21      todoItemOrder.classList.add('todo-list__item__order');
```
