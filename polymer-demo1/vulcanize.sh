vulcanize index.html --inline-css --inline-script --strip-comments | \
  crisper -h index.v.html -j app.js
babel app.js -o app.js
