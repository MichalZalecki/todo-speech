'use strict';

// ES6: Modules
// imports in Wop wop ES6 style!
import './style.scss';
import * as todoForm from 'todo-form';
import TodoListCtrl from 'todo-list';
import Rostrum from 'rostrum';

// ES6: Let keyword
let listCtrl = new TodoListCtrl();

// ES6: Arrow function
let handleSubmission = () => {
  // add todo to the list
  listCtrl.addTodo(todoForm.contentFieldFinal.innerHTML);
  // clean up
  todoForm.contentFieldFinal.innerHTML = '';
  todoForm.contentFieldFinal.focus();
}
// handle submission on form submit
todoForm.form.addEventListener('submit', (e) => {
  e.preventDefault();
  handleSubmission();
});

let note = false;
let rostrum = new Rostrum((txt, haveKeyword) => {
  // finall callback
  if (note && !haveKeyword) todoForm.contentFieldFinal.innerHTML += txt;
  todoForm.focusCursorAtTheEnd(todoForm.contentFieldFinal);
}, (txt) => {
  // interim callback
  if (note) todoForm.contentFieldInterim.innerHTML += txt;
}, () => {
  // on result callback
  if (note) todoForm.contentFieldInterim.innerHTML = '';
}, () => {
  // on end callback
  todoForm.speechMute.classList.remove('active');
  todoForm.speechUnmute.classList.add('active');
});

// mic is unmuted by default... thankfully
todoForm.speechUnmute.classList.add('active');

// Speech Recognition functionaly
if (rostrum.speechRecognitionSupport) {
  // recognition language
  rostrum.setLang('pl');

  // recognition keywords
  rostrum.addKeyword(/start/, () => {
    note = true;
    todoForm.contentFieldFinal.focus();
  });
  rostrum.addKeyword(/stop/, () => {
    note = false;
    // handle submission on stop keyword
    handleSubmission();
  });
  rostrum.addKeyword(/usuń zadanie (\d)/, (match) => {
    listCtrl.removeTodo(parseInt(match[1]));
  });

  todoForm.buttonSpeech.addEventListener('click', (e) => {
    // prevent form submission
    e.preventDefault();
    // manage speech button
    if (rostrum.recognizing) {
      rostrum.stop();
      todoForm.speechMute.classList.remove('active');
      todoForm.speechUnmute.classList.add('active');
    } else {
      rostrum.start();
      todoForm.speechMute.classList.add('active');
      todoForm.speechUnmute.classList.remove('active');
    }
  });
} else {
  // remove speech button button when
  // Speech Recognition is not supported
  todoForm.buttonSpeech.parentNode.removeChild(todoForm.buttonSpeech);
}
