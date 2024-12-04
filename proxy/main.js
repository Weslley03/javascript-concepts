const cart = [];

const handler = {
  get(target, property) {
    if(property === 'total') {
      return target.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }
    if(property === 'items') {
      return target.map(item => `${item.name} (${item.quantity})`).join(', ');
    }
    return target[property];
  },
  set(target, property, value) {
    throw new Error(`você não pode definir os items desse carrinho diretamente`);
  },
  apply(target, thisArg, args) {
    throw new Error(`esse carrinho não é uma função`);
  },
  deleteProperty(target, property) {
    throw new Error(`você não pode excluir propriedades diretamente no carrinho, necessário uma função para isso`);
  },
};

const cartProxy = new Proxy(cart, handler);

function addToCart(cart, item) {
  if(!item.name || typeof item.name !== 'string') {
    throw new Error(`o item precisa de um nome válido`);
  }
  if(typeof item.price !== 'number' || item.price <= 0 ) {
    throw new Error(`o preço do item deve ser um número maior que 0`);
  }
  if(typeof item.quantity !== 'number' || item.quantity <= 0) {
    throw new Error(`a quantidade do item deve ser um número maior que 0`);
  }

  const exixtItem = cart.find(cartItem => cartItem.name === item.name)
  if(exixtItem) {
    exixtItem.quantity += item.quantity;
  } else {
    cart.push(item);
  }
}

addToCart(cart, { name: 'Monitor', price: 100, quantity: 1 });
addToCart(cart, { name: 'Mouse', price: 50, quantity: 2 });
addToCart(cart, { name: 'Monitor', price: 100, quantity: 1 }); 

console.log(cartProxy.items)
console.log(cartProxy.total)
