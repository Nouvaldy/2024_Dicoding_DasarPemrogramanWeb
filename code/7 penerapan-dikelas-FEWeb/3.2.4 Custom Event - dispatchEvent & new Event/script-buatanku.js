const button = document.getElementById('tombol');
button.addEventListener('click',
() => button.dispatchEvent(myEvent));

const myEvent = new Event('pencet');
tombol.addEventListener('pencet',
() => document.getElementById('caption').innerText = 'anda telah menekan tombol')