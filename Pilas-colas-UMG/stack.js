//Nodo de pila
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  };
};

//Pila
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  };

  //método para ver último elemento
  peek() {
    return this.top;
  };

  //método para agregar elemento
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    };
    this.length++;
    return this;
  };

  //método para sacar elemento
  pop() {
    if (!this.top) {
      return null;
    };
    if (this.top === this.bottom) {
      this.bottom = null;
    };
    this.top = this.top.next;
    this.length--;
    return this;
  };
};

//creación de objeto
const myStack = new Stack();

//función generadora
function generador() {
  for (let i = 0; i <= 9999; i++) {
    let numero1 = getRndInteger(-10000, 10000);
    myStack.push(numero1);
  };
};

//funcion numeros aleatorios con limites min y max
function getRndInteger(min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

//llamada a función generadora
generador();
console.log(myStack);

//ver último elemento
console.log(myStack.peek());

//función para vaciar la pila
function vaciarPila() {
  for (let i = 0; i <= 9999; i++) {
    myStack.pop();
  };
};

//vaciado de pila
vaciarPila();
console.log(myStack);
