let body = document.body;
let roboto = new FontFaceObserver("Roboto");
let sansita = new FontFaceObserver("Sansita");
let timeout = 2000;


Promise.all([roboto.load(null, timeout), sansita.load(null, timeout)])
  .then(function () {
    body.classList.add("fonts-loaded");
    console.log('Fonts loaded');
    
  })
  .catch(function (e) {
    body.classList.add("fonts-failed");
    console.warn('Fonts not loaded')
  });
