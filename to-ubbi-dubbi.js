class ToUbbiDubbi {

  constructor () {
    this.vowels = [
      'a', 
      'e',
      'i',
      'o',
      'u'
    ];

    this.go();
  }

  go () {
    let walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let n;

    while (n = walk.nextNode()) {

      if( n.nodeValue.match(/^(#|\.)?[^{]+{/) || 
          n.nodeType !== Node.TEXT_NODE ||
          !/\S/.test(n.nodeValue)
        ) continue;

      n.nodeValue = n.nodeValue.split(' ').map((word) => {
        return this.translate(word);
      });
    }
  }

  translate (word) {

    let length = word.length;

    let translated = word.split('').map((letter, index) => {

      let lowerCase = letter.toLowerCase();
      let ub = letter === lowerCase ? 'ub' : 'UB';

      if(lowerCase === 'e' && (index + 1) === length) {
        return letter;
      }

      if(this.vowels.includes(lowerCase)) {
        return ub + letter;
      }

      return letter;
    });

    return translated.join('');
  }
}

window.addEventListener('load', () => {
  new ToUbbiDubbi();
}, false);
