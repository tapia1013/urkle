const sign_in = document.querySelector('.signin')
const name = prompt('What is you name?');

// sign_in.innerText = `Welcome, ${name}`;

if (sign_in !== '') {
  sign_in.innerHTML = `Welcome, <b style='font-weight: 900; color: red; text-transform: uppercase;'>${name}</b>`;
}

