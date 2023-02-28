//Nodo de cola
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  };
};

//cola
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  };

  //método ver primer elemento de cola
  peek() {
    return this.first;
  };

  //método agregar elemento a la cola
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    };
    this.length++;
    return this;
  };

  //método eliminar elemento de cola
  dequeue() {
    if (!this.first) {
      return null;
    };
    if (this.first === this.last) {
      this.last = null;
    };
    this.first = this.first.next;
    this.length--;
    return this;
  };
};

//creación de objeto
const myQueue = new Queue();

//función generadora
function generador() {
  for (let i = 0; i <= 9999; i++) {
    let numero1 = getRndInteger(-10000, 10000);
    myQueue.enqueue(numero1);
  };
};

//funcion numeros aleatorios con limites min y max
function getRndInteger(min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

//llamada a función generadora
generador();
console.log(myQueue);

//ver último elemento
console.log(myQueue.peek());

//función para vaciar la pila
function vaciarCola() {
  for (let i = 0; i <= 9999; i++) {
    myQueue.dequeue();
  };
};

//vaciado de cola
vaciarCola();
console.log(myQueue);

