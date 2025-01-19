import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import 'index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="1212">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("css-f1d9g4").style.top = "0";
  } else {
    document.getElementById("css-f1d9g4").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
