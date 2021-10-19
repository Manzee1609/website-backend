const firebase = require('firebase');

var firebaseConfig = {
    apiKey: "AIzaSyBGJPF4UhHEfeTJdhcneqDE7k_rrd5Ig4w",
    authDomain: "website-backend-a17fd.firebaseapp.com",
    projectId: "website-backend-a17fd",
    storageBucket: "website-backend-a17fd.appspot.com",
    messagingSenderId: "586089624108",
    appId: "1:586089624108:web:ed19717ab1864852da9789",
    measurementId: "G-91Y2YCWNZR"
  };

firebase.initializeApp(firebaseConfig);

module.exports = { firebase };