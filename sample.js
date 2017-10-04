var a = 10;

function first() {
  console.log('first', a);
  second();

  function second() {
    a = 20;
    console.log('second', a);
  }
}

console.log('outmost', a);
first();
