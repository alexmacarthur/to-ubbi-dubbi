class ToUbbiDubbi {

  constructor () {
    this.go();
  }

  go () {
    let walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let n;

    while (n = walk.nextNode()) {
      if (n.nodeType == Node.TEXT_NODE && /\S/.test(n.nodeValue)) {
        n.nodeValue = this.translate(n.nodeValue);
      }
    }
  }

  translate (word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let translated = word.split('').map((letter) => {

      if(vowels.includes(letter)) {
        return 'ub' + letter;
      }

      return letter;
    });

    return translated.join('');
  }
}

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    new ToUbbiDubbi();
  }
};
