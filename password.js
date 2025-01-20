const togglePassword = document.getElementById('togglePassword');// Selecciona el ícono para mostrar/ocultar la contraseña
const passwordInput = document.getElementById('password');// Selecciona el campo de entrada de la contraseña

// Agrega un evento al hacer clic en el ícono
togglePassword.addEventListener('click', () => {
  const type = passwordInput.type === 'password' ? 'text' : 'password';
  passwordInput.type = type;// Cambia el tipo del input entre 'password' y 'text'
  togglePassword.textContent = type === 'password' ? 'visibility_off' : 'visibility';// Cambia el texto del ícono dependiendo del estado


  // Agrega o elimina la clase 'visible' para el campo de contraseña
  if(type=='text'){
    passwordInput.classList.add('visible');// Aplica estilos para el estado visible

  }else{
    passwordInput.classList.remove('visible');// Quita los estilos del estado visible
  }
});
