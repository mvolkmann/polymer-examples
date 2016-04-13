vulcanize index.html --inline-script --inline-css | crisper -h index.v.html -j app.js
babel app.js -o app.js
