function welcome() {
    alert('Bismillah muncullah seluruh elemen html!');
    const content = document.querySelector('.contents');
    content.removeAttribute('hidden');
}


function increment() {
    document.getElementById('count').innerText++;
    if (document.getElementById('count').innerText == 8) {
      const easter = document.createElement('img');
      easter.setAttribute(
        'src',
        'https://pbs.twimg.com/media/Eapx0DdUMAAOug3.jpg'
      );

      const content = document.querySelector('.contents');
      content.appendChild(easter);
      document.querySelector('button').setAttribute('hidden','');
    }

}

//document.body.onload = welcome;
//document.getElementById('incrementButton').onclick = increment;