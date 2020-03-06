const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let regex = /[01]{10}|[*]{10}/gm;
    let morze = expr.match(regex);
    let dotdash = '';
    let word = '';
    
    //console.log(morze);
    function campare(morse, dd){
      for(let key in morse){
        //console.log(key)
         if (key == dd) {
           word = word + morse[key];
         }
      }
    }
    
    morze.forEach(item => {
      if (item == '**********') {
        word = word + ' '
      } else { 
        let letter = item.match(/[01]{2}/gm);
        letter.forEach(el => {
          if (el == '10') { 
            dotdash = dotdash + '.';
          } else if(el == '11') dotdash = dotdash + '-';
        });
        //console.log(dotdash)
        campare(MORSE_TABLE, dotdash)
        dotdash = '';
      }
    });
    
    return word
}

module.exports = {
    decode
}