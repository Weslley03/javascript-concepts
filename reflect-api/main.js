const appConfig = {
  theme: 'dark',
  language: 'en',
  notifications: true
};

const handler = {
  get(target, property, receiver) {
    console.log(`accesing propert "${property}"`)
    return Reflect.get(target, property, receiver);
  },
  set(target, property, value, receiver) {
    console.log(`setting property "${property}" to "${value}"`)
    if(property === 'language' && ![ 'en', 'es', 'pt' ].includes(value)) {
      console.error(`invalid value "${value}" for "language". Only allowed values like "en", "es" and "pt"`);
    }
    return Reflect.set(target, property, value, receiver);
  },
  has(target, property) {
    console.log(`checking if property "${property} exists"`)
    return Reflect.has(target, property);
  },

};

const configProxy = new Proxy(appConfig, handler);

console.log(configProxy.theme)
configProxy.language = 'pt'
configProxy.language = 'fr'
console.log('theme' in configProxy)
console.log('oi' in configProxy)