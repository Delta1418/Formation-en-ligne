function toggleDisplay(show, hide) {
    hide.style.display = 'none';
    show.style.display = 'flex';
  }
  
  let btnConnection = document.querySelector(".connection");
  let btnInscription = document.querySelector(".inscription");
  let boxConnection = document.querySelector(".form_connection");
  let boxInscription = document.querySelector(".form_inscription");
  let noAccount = document.querySelector(".noAccount");
  
  btnConnection.addEventListener("click", () => {
    toggleDisplay(boxConnection, boxInscription);
  });
  
  btnInscription.addEventListener("click", () => {
    toggleDisplay(boxInscription, boxConnection);
  });
  
  noAccount.addEventListener("click", () => {
    toggleDisplay(boxInscription, boxConnection);
  });
  