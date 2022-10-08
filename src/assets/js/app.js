const copyIp = document.querySelector('.ip__copy-btn');



copyIp.addEventListener('click', (event) => {
  const copyText = document.querySelector('.ip__input').value
  navigator.clipboard.writeText(copyText)
})
