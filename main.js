// palabras para el juego, agregar las que quieran siempre de 5 letras
// es un array de strings (dict por dictionary)
let dict = [
  'ivank',
  'lesta',
  'gatos',
  'papas',
  'fuego',
  'huevo',
  'color',
  'casas',
  'arbol',
  'nueve',
  'zorro',
  'remar',
  'locro',
  'jamon',
  'feliz',
  'cinco',
  'tonto',
  'cuero',
  'volar',
  'vuelo',
  'avion',
  'genio',
  'pibes'
];

let r = Math.trunc(Math.random() * dict.length)
let palabraCorrecta = dict[r];

// let perdiste = "perdiste";
// let ganaste = "ganaste";
let intentos = 0;
console.log(palabraCorrecta);


function handleSubmit(e) {
  e.preventDefault();
  // document.querySelector('input');
  let adivinanza = e.target.word.value;
  console.log(adivinanza);
  console.log(adivinanza.length);
  let container = document.getElementById('container');
for (let i = 0; i < adivinanza.length; i++) {

      let p = document.createElement('p');
        p.textContent = adivinanza[i];
        container.append(p);

            if (palabraCorrecta[i] == adivinanza[i]) {
              p.classList.add('green');
            }else if (palabraCorrecta[i] != adivinanza[i] && palabraCorrecta.includes(adivinanza[i])){
              p.classList.add('yellow');
            }else{
              p.classList.add('red');
            }
}
//crear 6 parrafos (1para cada palabra).

  console.log(dict.includes(adivinanza)); // DEBUG
  if (adivinanza == palabraCorrecta) {
    console.log('si era esa')
  } else {
    console.log('Nice try')
  }


  let i = 0;
  for (let c of adivinanza) {
    console.log(c);
    if (c == palabraCorrecta[i]) console.log("+");
    else if (palabraCorrecta.includes(c))                console.log("+-")
    else                       console.log("-");
    i++;
  }
  if (intentos < 6 && dict.includes(adivinanza)) {
    intentos++;
    console.log(intentos);
  }
  if (palabraCorrecta == adivinanza) {
  console.log("ganaste")
  }else if (intentos == 6) {
    console.log("perdiste");
  }

  if (intentos == 6 || palabraCorrecta == adivinanza) {
    r = Math.trunc(Math.random() * dict.length);
    palabraCorrecta = dict[r];
    console.log(palabraCorrecta);
    return;
  }
let div = document.createElement('div');
document.getElementById('div');
}
