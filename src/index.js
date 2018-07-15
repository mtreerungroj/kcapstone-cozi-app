import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import firebase from 'firebase/app'

var config = {
  apiKey: 'AIzaSyCTmDtrjWAZXJXHlANWjT4MEt9vl9Dnef4',
  authDomain: 'coziplus-kcapstone.firebaseapp.com',
  databaseURL: 'https://coziplus-kcapstone.firebaseio.com',
  projectId: 'coziplus-kcapstone',
  storageBucket: '',
  messagingSenderId: '1066197496793'
}
firebase.initializeApp(config)

ReactDOM.render(<App />, document.getElementById('root'))
